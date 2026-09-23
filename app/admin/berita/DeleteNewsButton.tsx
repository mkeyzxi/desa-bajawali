'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import ConfirmDelete from '@/components/admin/ConfirmDelete'
import { createClient } from '@/lib/supabase/client'

interface DeleteNewsButtonProps {
  id: string
  imagePath: string | null
  title: string
}

export default function DeleteNewsButton({ id, imagePath, title }: DeleteNewsButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    const supabase = createClient()
    
    // 1. Delete image from storage if exists
    if (imagePath) {
      await supabase.storage.from('desa-bajawali').remove([imagePath])
    }

    // 2. Delete from database
    const { error } = await supabase.from('news').delete().eq('id', id)
    
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
        title="Hapus Berita"
      >
        <Trash2 size={16} />
      </button>

      {showConfirm && (
        <ConfirmDelete
          title="Hapus Berita"
          message={`Apakah Anda yakin ingin menghapus berita "${title}"? Aksi ini tidak dapat dibatalkan.`}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  )
}
