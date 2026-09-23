// =============================================
// Database Types for Supabase
// =============================================

export type UserRole = 'owner' | 'developer' | 'administrator'

export interface Profile {
  id: string
  full_name: string
  email: string
  role: UserRole
  avatar_url: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export type NewsCategory =
  | 'Pemerintahan'
  | 'Kegiatan Masyarakat'
  | 'Pembangunan'
  | 'Pelayanan'
  | 'Pemuda'
  | 'Pendidikan/KKN'
  | 'Sosial-Budaya'

export const NEWS_CATEGORIES: NewsCategory[] = [
  'Pemerintahan',
  'Kegiatan Masyarakat',
  'Pembangunan',
  'Pelayanan',
  'Pemuda',
  'Pendidikan/KKN',
  'Sosial-Budaya',
]

export interface News {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: NewsCategory
  image_url: string | null
  image_path: string | null
  author_id: string
  published_at: string | null
  is_published: boolean
  created_at: string
  updated_at: string
  // Joined fields
  author?: Profile
}

export type GalleryCategory =
  | 'Pemerintahan'
  | 'Kegiatan Masyarakat'
  | 'Pembangunan'
  | 'Pelayanan'
  | 'Sosial'
  | 'Pendidikan'
  | 'Budaya'
  | 'Lainnya'

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Pemerintahan',
  'Kegiatan Masyarakat',
  'Pembangunan',
  'Pelayanan',
  'Sosial',
  'Pendidikan',
  'Budaya',
  'Lainnya',
]

export interface GalleryItem {
  id: string
  title: string
  caption: string | null
  category: GalleryCategory
  image_url: string
  image_path: string
  taken_at: string | null
  photographer: string | null
  is_published: boolean
  created_by: string
  created_at: string
  updated_at: string
  // Joined fields
  creator?: Profile
}
