'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import ImageUploader from './ImageUploader'
import { GALLERY_CATEGORIES, type GalleryCategory } from '@/types/database'

interface GalleryFormProps {
  initialData?: {
    id: string
    title: string
    caption: string | null
    category: GalleryCategory
    image_url: string
    image_path: string
    taken_at: string | null
    photographer: string | null
    is_published: boolean
  }
}

export default function GalleryForm({ initialData }: GalleryFormProps) {
  const router = useRouter()
  const isEditing = !!initialData

  const [title, setTitle] = useState(initialData?.title || '')
  const [caption, setCaption] = useState(initialData?.caption || '')
  const [category, setCategory] = useState<GalleryCategory>(
    initialData?.category || 'Kegiatan Masyarakat'
  )
  const [takenAt, setTakenAt] = useState(initialData?.taken_at || '')
  const [photographer, setPhotographer] = useState(initialData?.photographer || '')
  const [imageUrl, setImageUrl] = useState<string | null>(initialData?.image_url || null)
  const [imagePath, setImagePath] = useState<string | null>(initialData?.image_path || null)
  const [isPublished, setIsPublished] = useState(initialData?.is_published ?? true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (!title.trim()) {
        throw new Error('Judul foto tidak boleh kosong')
      }

      if (!imageUrl || !imagePath) {
        throw new Error('Foto wajib diupload')
      }

      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) throw new Error('Anda harus login terlebih dahulu')

      const payload = {
        title,
        caption,
        category,
        taken_at: takenAt || null,
        photographer,
        image_url: imageUrl,
        image_path: imagePath,
        is_published: isPublished,
      }

      if (isEditing) {
        const { error: updateError } = await supabase
          .from('gallery')
          .update(payload)
          .eq('id', initialData.id)

        if (updateError) throw updateError
      } else {
        const { error: insertError } = await supabase
          .from('gallery')
          .insert({
            ...payload,
            created_by: user.id,
          })

        if (insertError) throw insertError
      }

      router.push('/admin/galeri')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat menyimpan foto')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 border border-paper-200 rounded-lg space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-ink-800 mb-1">
                Judul Foto <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Panen Raya 2026"
                className="w-full px-4 py-2 border border-paper-200 rounded-md bg-paper-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-ink-950"
                required
              />
            </div>

            <div>
              <label htmlFor="caption" className="block text-sm font-medium text-ink-800 mb-1">
                Keterangan Singkat (Caption)
              </label>
              <textarea
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Tambahkan detail lebih lanjut jika perlu..."
                rows={3}
                className="w-full px-4 py-2 border border-paper-200 rounded-md bg-paper-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-ink-950 resize-none"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="takenAt" className="block text-sm font-medium text-ink-800 mb-1">
                  Tanggal Diambil
                </label>
                <input
                  id="takenAt"
                  type="date"
                  value={takenAt}
                  onChange={(e) => setTakenAt(e.target.value)}
                  className="w-full px-4 py-2 border border-paper-200 rounded-md bg-paper-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-ink-950"
                />
              </div>
              <div>
                <label htmlFor="photographer" className="block text-sm font-medium text-ink-800 mb-1">
                  Fotografer / Sumber
                </label>
                <input
                  id="photographer"
                  type="text"
                  value={photographer}
                  onChange={(e) => setPhotographer(e.target.value)}
                  placeholder="Contoh: Admin Desa"
                  className="w-full px-4 py-2 border border-paper-200 rounded-md bg-paper-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-ink-950"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 border border-paper-200 rounded-lg">
            <h3 className="text-sm font-semibold text-ink-950 uppercase tracking-wider mb-4">
              Upload Foto <span className="text-red-500">*</span>
            </h3>
            <ImageUploader
              folder={`galeri/${new Date().getFullYear()}`}
              currentImageUrl={imageUrl}
              currentImagePath={imagePath}
              onUploadComplete={(url, path) => {
                setImageUrl(url)
                setImagePath(path)
              }}
              onRemove={() => {
                setImageUrl(null)
                setImagePath(null)
              }}
              // Galeri biasanya lebih kecil butuhnya dari berita (thumbnail grid)
              maxWidth={1200}
            />
          </div>

          <div className="bg-white p-6 border border-paper-200 rounded-lg space-y-4">
            <h3 className="text-sm font-semibold text-ink-950 uppercase tracking-wider mb-2">
              Pengaturan
            </h3>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-ink-800 mb-1">
                Kategori
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as GalleryCategory)}
                className="w-full px-4 py-2 border border-paper-200 rounded-md bg-paper-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-ink-950"
              >
                {GALLERY_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm font-medium text-ink-800">Tampilkan di Galeri Publik</span>
              </label>
            </div>

            <div className="pt-4 mt-4 border-t border-paper-200">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-semibold rounded-md transition-colors text-sm cursor-pointer"
              >
                {loading ? 'Menyimpan...' : isEditing ? 'Simpan Perubahan' : 'Upload Foto'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
