import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GenericPotensiPage({ params }: { params?: { slug?: string } }) {
  // We can use a generic layout for the other potensi pages since they are just stubs
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Link href="/potensi" className="text-xs font-bold uppercase tracking-widest text-ink-400 hover:text-green-700 transition-colors">
              Potensi Desa
            </Link>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
            Halaman Potensi
          </h1>
          <p className="text-ink-800 text-lg leading-relaxed">
            Halaman ini sedang dalam tahap pengembangan konten. Data dan informasi resmi akan segera ditambahkan setelah divalidasi oleh pemerintah desa.
          </p>
          <div className="mt-12">
            <Link href="/potensi" className="group inline-flex items-center justify-center gap-3 bg-green-700 text-white hover:bg-green-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_rgb(8,118,83,0.3)] hover:-translate-y-1">
              <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Kembali ke Daftar Potensi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
