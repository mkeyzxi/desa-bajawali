'use client'

import { useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'

interface ConfirmDeleteProps {
  title: string
  message: string
  onConfirm: () => Promise<void>
  onCancel: () => void
}

export default function ConfirmDelete({
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmDeleteProps) {
  const [loading, setLoading] = useState(false)

  async function handleConfirm() {
    setLoading(true)
    await onConfirm()
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full p-6 space-y-4">
        <button
          onClick={onCancel}
          className="absolute top-3 right-3 text-ink-400 hover:text-ink-800 cursor-pointer"
          aria-label="Tutup"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={20} className="text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink-950">{title}</h3>
            <p className="text-sm text-ink-600 mt-1">{message}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-ink-600 bg-paper-100 hover:bg-paper-200 rounded-md transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 rounded-md transition-colors cursor-pointer"
          >
            {loading ? 'Menghapus...' : 'Hapus'}
          </button>
        </div>
      </div>
    </div>
  )
}
