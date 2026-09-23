import Image from "next/image";
import { galeriDummy } from "@/data/dummy";
import { getPublishedGallery } from "@/lib/queries/gallery";
import { isSupabaseSource } from "@/lib/data-source";

export const metadata = {
  title: "Galeri Dokumentasi Desa Bajawali",
};

export default async function GaleriPage() {
  const isSupabase = isSupabaseSource('gallery')
  
  let galleryList = []
  
  if (isSupabase) {
    const supabaseGallery = await getPublishedGallery()
    galleryList = supabaseGallery.map(g => ({
      id: g.id,
      url: g.image_url,
      caption: g.title, // Map title to caption for UI display
      category: g.category,
    }))
  } else {
    galleryList = galeriDummy
  }

  // Get unique categories for filter
  const categories = ['Semua', ...Array.from(new Set(galleryList.map(item => item.category)))]

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        <div className="mb-12">
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-4">
            Galeri Dokumentasi
          </h1>
          <p className="text-ink-800 text-lg max-w-2xl">
            Rekam jejak visual kegiatan masyarakat, keindahan alam, dan perkembangan Desa Bajawali.
          </p>
        </div>

        {galleryList.length === 0 ? (
          <div className="text-center py-24 border border-paper-200 rounded-lg bg-paper-50">
            <h3 className="text-xl font-editorial font-semibold text-ink-950">Belum ada foto</h3>
            <p className="text-ink-600 mt-2">Foto kegiatan akan tampil di sini.</p>
          </div>
        ) : (
          <>
            {/* Filter (Visual only for now, can be implemented with client components later) */}
            <div className="flex flex-wrap gap-3 mb-10 border-b border-paper-200 pb-6">
              {categories.map((cat, idx) => (
                <button 
                  key={cat}
                  className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                    idx === 0 
                      ? 'bg-green-700 text-white' 
                      : 'bg-paper-100 text-ink-600 hover:bg-paper-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry-like Grid Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryList.map((photo, index) => (
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
                  
                  {/* Overlay Caption on Hover */}
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
          </>
        )}

      </div>
    </div>
  );
}
