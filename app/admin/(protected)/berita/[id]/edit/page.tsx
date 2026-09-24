import { notFound } from 'next/navigation'
import NewsForm from '@/components/admin/NewsForm'
import { getNewsById } from '@/lib/queries/news'

export const metadata = {
  title: 'Edit Berita — CMS Desa Bajawali',
}

export default async function EditBeritaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const news = await getNewsById(id)

  if (!news) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Edit Berita
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Ubah konten berita atau perbarui pengaturan publikasi.
        </p>
      </div>

      <NewsForm initialData={news} />
    </div>
  )
}
