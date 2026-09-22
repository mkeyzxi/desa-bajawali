import { desaInfo, mataPencaharian } from "@/data/dummy";

export const metadata = {
  title: "Demografi Desa Bajawali",
};

export default function DemografiPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">Profil Desa</span>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
            Kependudukan & Demografi
          </h1>
          
          <div className="prose prose-xl prose-p:text-ink-800 prose-headings:font-editorial prose-headings:text-ink-950 max-w-none mb-12">
            <p>
              Berdasarkan data profil tahun {desaInfo.tahunData}, {desaInfo.name} memiliki total penduduk sebanyak <strong>{desaInfo.penduduk} jiwa</strong> yang tergabung dalam <strong>{desaInfo.kk} Kepala Keluarga (KK)</strong>.
            </p>
            <p>
              Penduduk tersebar di {desaInfo.dusun} dusun dan {desaInfo.rt} Rukun Tetangga (RT). Mata pencaharian warga antara lain {mataPencaharian.map((m, i) => (
                <span key={m}>
                  {i > 0 && i < mataPencaharian.length - 1 ? ', ' : i === mataPencaharian.length - 1 ? ', dan ' : ''}
                  <strong>{m.toLowerCase()}</strong>
                </span>
              ))}, dengan sektor pertanian dan perkebunan sebagai penopang utama ekonomi wilayah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-paper-50 border border-paper-200 p-8 rounded-md">
              <div className="text-sm font-semibold text-ink-600 mb-2">Total Penduduk</div>
              <div className="font-editorial text-5xl font-semibold text-ink-950 mb-4">{desaInfo.penduduk}</div>
              
              <div className="flex gap-4 border-t border-paper-200 pt-4 mt-6">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-1">Laki-laki</div>
                  <div className="font-editorial text-2xl text-ink-950">{desaInfo.lakiLaki}</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-1">Perempuan</div>
                  <div className="font-editorial text-2xl text-ink-950">{desaInfo.perempuan}</div>
                </div>
              </div>
            </div>

            <div className="bg-paper-50 border border-paper-200 p-8 rounded-md">
              <div className="text-sm font-semibold text-ink-600 mb-2">Kepala Keluarga</div>
              <div className="font-editorial text-5xl font-semibold text-ink-950 mb-4">
                {desaInfo.kk} <span className="text-2xl text-ink-400 font-sans">KK</span>
              </div>
              
              <div className="flex gap-4 border-t border-paper-200 pt-4 mt-6">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-1">Jumlah Dusun</div>
                  <div className="font-editorial text-2xl text-ink-950">{desaInfo.dusun}</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-1">Jumlah RT</div>
                  <div className="font-editorial text-2xl text-ink-950">{desaInfo.rt}</div>
                </div>
              </div>
            </div>

            <div className="bg-paper-50 border border-paper-200 p-8 rounded-md md:col-span-2 lg:col-span-1">
              <div className="text-sm font-semibold text-ink-600 mb-2">Kelompok Umur Terbanyak</div>
              <div className="font-editorial text-5xl font-semibold text-ink-950 mb-4">
                346 <span className="text-2xl text-ink-400 font-sans">jiwa</span>
              </div>
              
              <div className="flex gap-4 border-t border-paper-200 pt-4 mt-6">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-1">Usia</div>
                  <div className="font-editorial text-2xl text-ink-950">25–54 th</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-1">Usia 0–14</div>
                  <div className="font-editorial text-2xl text-ink-950">119</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-1">Usia 65+</div>
                  <div className="font-editorial text-2xl text-ink-950">52</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-paper-200 bg-paper-50 p-6 md:p-8 rounded-md">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-4">
              Sebaran Penduduk per Dusun
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { nama: 'Dusun Kerta', jumlah: 164 },
                { nama: 'Dusun Makmur', jumlah: 350 },
                { nama: 'Dusun Lestari', jumlah: 174 },
                { nama: 'Dusun Mandiri', jumlah: 77 },
              ].map((dusun) => (
                <div key={dusun.nama}>
                  <div className="font-editorial text-3xl text-ink-950 mb-1">{dusun.jumlah}</div>
                  <div className="text-sm font-semibold text-ink-600">{dusun.nama}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/data-desa" className="inline-flex items-center justify-center bg-transparent border border-paper-200 text-ink-800 hover:border-green-700 hover:text-green-700 px-6 py-3 rounded-md font-medium transition-colors">
              Lihat Analitik & Grafik Data Desa &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
