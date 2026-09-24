'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

export interface GalleryPhoto {
  id: string
  url: string
  caption: string
  category: string
}

interface GalleryFilterProps {
  photos: GalleryPhoto[]
}

const ALL_CATEGORY = 'Semua'

function normalizeCategory(category: string) {
  return category.trim().toLocaleLowerCase('id-ID')
}

export default function GalleryFilter({ photos }: GalleryFilterProps) {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY)

  const categories = useMemo(
    () => [ALL_CATEGORY, ...Array.from(new Set(photos.map((photo) => photo.category)))],
    [photos],
  )

  const categoryCounts = useMemo(
    () =>
      photos.reduce<Record<string, number>>((counts, photo) => {
        const category = normalizeCategory(photo.category)
        counts[category] = (counts[category] ?? 0) + 1
        return counts
      }, {}),
    [photos],
  )

  const filteredPhotos = useMemo(
    () =>
      activeCategory === ALL_CATEGORY
        ? photos
        : photos.filter((photo) => normalizeCategory(photo.category) === normalizeCategory(activeCategory)),
    [activeCategory, photos],
  )

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-10 border-b border-paper-200 pb-6" role="group" aria-label="Filter kategori galeri">
        {categories.map((category) => {
          const isActive = activeCategory === category
          const count = category === ALL_CATEGORY
            ? photos.length
            : categoryCounts[normalizeCategory(category)] ?? 0

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${
                isActive
                  ? 'bg-green-700 text-white'
                  : 'bg-paper-100 text-ink-600 hover:bg-paper-200'
              }`}
            >
              {category}
              <span className="ml-2 text-[10px] opacity-70">{count}</span>
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Menampilkan {filteredPhotos.length} foto
        {activeCategory !== ALL_CATEGORY ? ` pada kategori ${activeCategory}` : ''}.
      </p>

      {filteredPhotos.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => (
            <div key={photo.id} className="group relative block break-inside-avoid border border-paper-200 rounded-md overflow-hidden bg-paper-100">
              <div className="relative w-full">
                <div className={`relative w-full ${index % 2 === 0 ? 'h-[400px]' : 'h-[300px]'}`}>
                  <Image
                    src={photo.url}
                    alt={photo.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-green-200/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">
                  {photo.category}
                </span>
                <p className="font-editorial text-lg text-white">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-paper-200 rounded-lg bg-paper-50">
          <h3 className="text-xl font-editorial font-semibold text-ink-950">Belum ada foto</h3>
          <p className="text-ink-600 mt-2">Tidak ada foto pada kategori ini.</p>
        </div>
      )}
    </>
  )
}
