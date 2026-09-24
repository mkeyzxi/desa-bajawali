import { notFound } from 'next/navigation'
import GalleryForm from '@/components/admin/GalleryForm'
import { getGalleryById } from '@/lib/queries/gallery'

export const metadata = {
  title: 'Edit Foto Galeri — CMS Desa Bajawali',
}

export default async function EditGaleriPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const galleryItem = await getGalleryById(id)

  if (!galleryItem) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Edit Foto Galeri
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Perbarui detail keterangan foto atau ubah pengaturan tampilannya.
        </p>
      </div>

      <GalleryForm initialData={galleryItem} />
    </div>
  )
}
