import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Potensi Pertanian Desa Bajawali",
};

export default function PotensiPertanianPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        {/* Header/Hero Article */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/potensi" className="text-xs font-bold uppercase tracking-widest text-ink-400 hover:text-green-700 transition-colors">
              Potensi Desa
            </Link>
            <span className="text-ink-400 text-xs">&rarr;</span>
            <span className="text-xs font-bold uppercase tracking-widest text-ink-950">
              Pertanian
            </span>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
            Pertanian & Perkebunan
          </h1>
          <p className="text-ink-800 text-lg leading-relaxed">
            Sektor pertanian dan perkebunan merupakan tulang punggung perekonomian sebagian besar masyarakat Desa Bajawali. Kondisi tanah yang subur mendukung berbagai komoditas utama.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative aspect-[21/9] w-full mb-16 border border-paper-200 rounded-md overflow-hidden">
          <Image 
            src="https://images.pexels.com/photos/1576398/pexels-photo-1576398.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Pertanian Desa Bajawali" 
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 p-2 text-xs text-ink-800 rounded-sm">
            Lanskap persawahan — (Foto Ilustrasi Sementara)
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto prose prose-xl prose-p:text-ink-800 prose-headings:font-editorial prose-headings:text-ink-950 max-w-none">
          <h2>Komoditas Utama</h2>
          <p>
            Secara historis, komoditas utama dari desa ini mencakup padi sawah, serta beberapa tanaman perkebunan seperti kelapa dalam dan kelapa sawit yang dikelola baik oleh rakyat maupun bermitra dengan pihak swasta.
          </p>
          <p>
            Masyarakat secara turun temurun menggarap lahan ini dengan sistem yang terus berkembang, menyatukan kearifan lokal dengan inovasi pertanian modern untuk menjaga hasil yang maksimal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
            <div className="border border-paper-200 p-6 rounded-md bg-paper-50">
              <div className="font-editorial text-3xl text-ink-950 mb-2">Padi Sawah</div>
              <p className="text-sm text-ink-600">Menjadi tumpuan ketahanan pangan warga lokal dengan beberapa kali masa panen per tahun.</p>
            </div>
            <div className="border border-paper-200 p-6 rounded-md bg-paper-50">
              <div className="font-editorial text-3xl text-ink-950 mb-2">Perkebunan</div>
              <p className="text-sm text-ink-600">Komoditas bernilai jual yang sebagian dikirim ke luar daerah.</p>
            </div>
          </div>

          <h2>Tantangan dan Harapan</h2>
          <p>
            Tantangan terbesar yang dihadapi petani saat ini adalah memastikan ketersediaan pupuk dan stabilitas harga jual. Melalui kelompok tani (Poktan), warga terus berupaya saling mendukung untuk meningkatkan kapasitas produksi dan mengelola lahan secara berkelanjutan.
          </p>

          <div className="mt-8 p-4 bg-sun/10 border-l-2 border-sun text-sm text-ink-800">
            <strong>Catatan Data:</strong> Detail produksi dan jenis tanaman pertanian akan diperbarui setelah data komprehensif dari dinas pertanian/pemerintah desa divalidasi.
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-paper-200 flex justify-center">
          <Link href="/potensi" className="group inline-flex items-center justify-center gap-3 bg-green-700 text-white hover:bg-green-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_rgb(8,118,83,0.3)] hover:-translate-y-1">
            <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Kembali ke Daftar Potensi
          </Link>
        </div>

      </div>
    </div>
  );
}
