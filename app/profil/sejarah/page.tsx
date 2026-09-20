import Image from "next/image";

export const metadata = {
  title: "Sejarah Desa Bajawali",
};

export default function SejarahPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">Profil Desa</span>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
            Sejarah Desa Bajawali
          </h1>
          
          <div className="relative aspect-[21/9] w-full mb-12 border border-paper-200 rounded-md overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1596700810769-cf74a38119eb?q=80&w=1200&auto=format&fit=crop" 
              alt="Sejarah Desa Bajawali" 
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-xl prose-p:text-ink-800 prose-headings:font-editorial prose-headings:text-ink-950 max-w-none">
            <p className="text-xl font-medium text-ink-950 leading-relaxed mb-8">
              Desa Bajawali merupakan salah satu desa yang terletak di Kecamatan Lariang, Kabupaten Pasangkayu. Sejarah pembentukannya berkaitan erat dengan perkembangan kawasan administratif di Sulawesi Barat serta dinamika kependudukan setempat.
            </p>
            
            <h2>Asal-usul Desa</h2>
            <p>
              [Draft Data Contoh] Asal mula penamaan Bajawali bersumber dari kisah masyarakat lokal. Wilayah ini awalnya merupakan pemukiman kecil yang kemudian terus berkembang seiring dengan masuknya pendatang dan aktivitas perkebunan di sekitarnya.
            </p>
            
            <h2>Perkembangan Wilayah</h2>
            <p>
              Seiring berjalannya waktu, Bajawali mengalami pemekaran wilayah dan pertumbuhan penduduk yang signifikan. Pembangunan fasilitas dasar seperti sarana pendidikan, kesehatan, dan infrastruktur jalan mulai digalakkan untuk mendukung perekonomian warga yang mayoritas bertani.
            </p>

            <div className="my-12 border-l-4 border-green-700 pl-6 py-2 bg-paper-100 italic text-ink-600">
              &quot;Kekuatan utama Bajawali terletak pada kebersamaan masyarakatnya dalam menghadapi setiap perubahan dan perkembangan jaman.&quot;
            </div>

            <h2>Kondisi Saat Ini</h2>
            <p>
              Kini, Desa Bajawali terus berbenah menuju desa yang mandiri dan berdaya saing. Melalui kolaborasi antara pemerintah desa dan warga, berbagai potensi lokal terus digali, baik dari sektor pertanian maupun pemberdayaan UMKM.
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-paper-200 flex justify-between items-center">
            <div className="text-sm text-ink-600">Terakhir diperbarui: 2026</div>
            <a href="/profil/struktur-pemerintahan" className="text-sm font-semibold text-green-700 hover:text-green-800 transition-colors">
              Lihat Struktur Pemerintahan &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
