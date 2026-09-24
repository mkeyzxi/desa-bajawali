-- =============================================
-- Supabase Migration Script — Desa Bajawali CMS
-- =============================================
-- Jalankan script ini di Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste → Run

-- 1. Enable UUID extension (biasanya sudah aktif)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- 2. Tabel Profiles
-- =============================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  role TEXT NOT NULL DEFAULT 'administrator' CHECK (role IN ('owner', 'developer', 'administrator')),
  avatar_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_profiles_updated
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email,
    'administrator'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop trigger if exists, then create
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- 3. Tabel News
-- =============================================
CREATE TABLE IF NOT EXISTS public.news (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Pemerintahan',
  image_url TEXT,
  image_path TEXT,
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER on_news_updated
  BEFORE UPDATE ON public.news
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Index for slug lookup
CREATE INDEX IF NOT EXISTS idx_news_slug ON public.news(slug);
CREATE INDEX IF NOT EXISTS idx_news_published ON public.news(is_published, published_at DESC);

-- =============================================
-- 4. Tabel Gallery
-- =============================================
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  caption TEXT,
  category TEXT NOT NULL DEFAULT 'Lainnya',
  image_url TEXT NOT NULL,
  image_path TEXT NOT NULL,
  taken_at DATE,
  photographer TEXT,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER on_gallery_updated
  BEFORE UPDATE ON public.gallery
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE INDEX IF NOT EXISTS idx_gallery_published ON public.gallery(is_published, created_at DESC);

-- =============================================
-- 5. Row Level Security (RLS)
-- =============================================

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- News policies
CREATE POLICY "Published news are viewable by everyone"
  ON public.news FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all news"
  ON public.news FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON public.news FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON public.news FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete news"
  ON public.news FOR DELETE
  TO authenticated
  USING (true);

-- Gallery policies
CREATE POLICY "Published gallery items are viewable by everyone"
  ON public.gallery FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all gallery items"
  ON public.gallery FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert gallery items"
  ON public.gallery FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery items"
  ON public.gallery FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete gallery items"
  ON public.gallery FOR DELETE
  TO authenticated
  USING (true);

-- =============================================
-- 6. Storage Bucket
-- =============================================
-- Buat bucket 'desa-bajawali' via Dashboard → Storage → Create Bucket
-- Atau jalankan ini:
INSERT INTO storage.buckets (id, name, public)
VALUES ('desa-bajawali', 'desa-bajawali', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public read access for desa-bajawali bucket"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'desa-bajawali');

CREATE POLICY "Authenticated users can upload to desa-bajawali bucket"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'desa-bajawali');

CREATE POLICY "Authenticated users can update in desa-bajawali bucket"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'desa-bajawali');

CREATE POLICY "Authenticated users can delete from desa-bajawali bucket"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'desa-bajawali');

-- =============================================
-- 7. Setelah menjalankan script ini:
-- =============================================
-- 1. Buka Dashboard → Authentication → Users
-- 2. Pastikan user yang sudah ada terdaftar
-- 3. Buka SQL Editor, jalankan:
--
--    UPDATE public.profiles
--    SET role = 'owner', full_name = 'Nama Anda'
--    WHERE email = 'email_anda@example.com';
--
-- Ganti email_anda@example.com dengan email user yang terdaftar.
