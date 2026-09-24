'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import ConfirmDelete from '@/components/admin/ConfirmDelete'
import { createClient } from '@/lib/supabase/client'

interface DeleteGalleryButtonProps {
  id: string
  imagePath: string
}

export default function DeleteGalleryButton({ id, imagePath }: DeleteGalleryButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    const supabase = createClient()
    
    // 1. Delete image from storage
    await supabase.storage.from('desa-bajawali').remove([imagePath])

    // 2. Delete from database
    const { error } = await supabase.from('gallery').delete().eq('id', id)
    
    if (error) {
      alert(`Gagal menghapus: ${error.message}`)
      return
    }

    setShowConfirm(false)
    router.refresh()
  }

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="inline-flex items-center justify-center w-8 h-8 rounded text-ink-400 hover:text-red-600 hover:bg-red-50 transition-colors"
        title="Hapus Foto"
      >
        <Trash2 size={16} />
      </button>

      {showConfirm && (
        <ConfirmDelete
          title="Hapus Foto Galeri"
          message={`Apakah Anda yakin ingin menghapus foto ini dari galeri?`}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  )
}
