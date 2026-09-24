import GalleryForm from '@/components/admin/GalleryForm'

export const metadata = {
  title: 'Tambah Foto Galeri — CMS Desa Bajawali',
}

export default function TambahGaleriPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Tambah Foto Galeri
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Upload dan tambahkan detail foto ke galeri dokumentasi desa.
        </p>
      </div>

      <GalleryForm />
    </div>
  )
}
