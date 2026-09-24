// =============================================
// Browser-side Image Compression
// =============================================
// Uses Canvas API — no external library needed
// Resizes, converts to WebP, and compresses images

export interface CompressionOptions {
  maxWidth?: number
  maxHeight?: number
  quality?: number
  format?: 'image/webp' | 'image/jpeg'
}

export interface CompressionResult {
  blob: Blob
  width: number
  height: number
  originalSize: number
  compressedSize: number
  ratio: number
}

const DEFAULT_OPTIONS: Required<CompressionOptions> = {
  maxWidth: 1600,
  maxHeight: 1200,
  quality: 0.8,
  format: 'image/webp',
}

/**
 * Validate file before compression
 */
export function validateImageFile(file: File): string | null {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  if (!allowedTypes.includes(file.type)) {
    return 'Format file tidak didukung. Gunakan JPEG, PNG, atau WebP.'
  }

  const maxSize = 10 * 1024 * 1024 // 10 MB
  if (file.size > maxSize) {
    return 'Ukuran file terlalu besar. Maksimal 10 MB.'
  }

  return null
}

/**
 * Compress and resize an image file in the browser
 */
export async function compressImage(
  file: File,
  options: CompressionOptions = {}
): Promise<CompressionResult> {
  const opts = { ...DEFAULT_OPTIONS, ...options }

  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)

      // Calculate new dimensions maintaining aspect ratio
      let { width, height } = img

      if (width > opts.maxWidth) {
        height = Math.round((height * opts.maxWidth) / width)
        width = opts.maxWidth
      }

      if (height > opts.maxHeight) {
        width = Math.round((width * opts.maxHeight) / height)
        height = opts.maxHeight
      }

      // Draw to canvas
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas context not available'))
        return
      }

      ctx.drawImage(img, 0, 0, width, height)

      // Convert to blob
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Gagal mengompresi gambar'))
            return
          }

          resolve({
            blob,
            width,
            height,
            originalSize: file.size,
            compressedSize: blob.size,
            ratio: Math.round((1 - blob.size / file.size) * 100),
          })
        },
        opts.format,
        opts.quality
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Gagal memuat gambar'))
    }

    img.src = url
  })
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
