import NewsForm from '@/components/admin/NewsForm'

export const metadata = {
  title: 'Tambah Berita — CMS Desa Bajawali',
}

export default function TambahBeritaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Tambah Berita Baru
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Isi form di bawah ini untuk membuat berita atau pengumuman baru.
        </p>
      </div>

      <NewsForm />
    </div>
  )
}
