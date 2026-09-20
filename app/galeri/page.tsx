import Image from "next/image";
import { galeriDummy } from "@/data/dummy";

export const metadata = {
  title: "Galeri Dokumentasi Desa Bajawali",
};

export default function GaleriPage() {
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

        {/* Filter (Visual only for now) */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-paper-200 pb-6">
          <button className="text-xs font-semibold uppercase tracking-widest bg-green-700 text-white px-4 py-2 rounded-full">
            Semua
          </button>
          <button className="text-xs font-semibold uppercase tracking-widest bg-paper-100 text-ink-600 hover:bg-paper-200 px-4 py-2 rounded-full transition-colors">
            Kegiatan Masyarakat
          </button>
          <button className="text-xs font-semibold uppercase tracking-widest bg-paper-100 text-ink-600 hover:bg-paper-200 px-4 py-2 rounded-full transition-colors">
            Potensi Alam
          </button>
          <button className="text-xs font-semibold uppercase tracking-widest bg-paper-100 text-ink-600 hover:bg-paper-200 px-4 py-2 rounded-full transition-colors">
            Pemerintahan
          </button>
        </div>

        {/* Masonry-like Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galeriDummy.map((photo) => (
            <div key={photo.id} className="group relative block break-inside-avoid border border-paper-200 rounded-md overflow-hidden bg-paper-100">
              <div className="relative w-full">
                {/* Use a relative container with intrinsic aspect ratio behavior for Next Image. We'll use style auto for height but next/image needs width/height if no fill, so let's use a standard img tag for true masonry or Next Image with fill on a specific aspect ratio container. For true masonry with Next Image, we'll give it a standard layout responsive. */}
                {/* Since we don't know the exact aspect ratio, we'll set a min height and use fill */}
                <div className={`relative w-full ${parseInt(photo.id) % 2 === 0 ? 'h-[400px]' : 'h-[300px]'}`}>
                   <Image 
                    src={photo.url} 
                    alt={photo.caption} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Overlay Caption on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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
        
        <div className="mt-16 pt-8 border-t border-paper-200 text-center text-sm text-ink-400">
          *Menampilkan foto contoh (dummy) untuk keperluan desain layout.
        </div>

      </div>
    </div>
  );
}
