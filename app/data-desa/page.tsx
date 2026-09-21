import {desaInfo} from '@/data/dummy'
import Image from 'next/image'
import {
  BeritaLineChartWrapper,
  KategoriDoughnutChartWrapper,
  KelompokUmurBarChartWrapper,
  AgamaDoughnutChartWrapper,
  SukuDoughnutChartWrapper,
  StatusPernikahanPieChartWrapper,
  DistribusiWilayahBarChartWrapper,
} from '@/components/charts/ChartsWrapper'

export const metadata = {
  title: 'Data Desa & Statistik Bajawali',
}

export default function DataDesaPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-start mb-16">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-ink-400">
                Data Desa
              </span>
            </div>
            <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
              Data & Statistik
            </h1>
            <p className="text-ink-800 text-lg leading-relaxed mb-6">
              Halaman ini menyajikan statistik dan indikator Desa Bajawali dalam bentuk angka, grafik,
              dan keterangan sumber.
            </p>
            <div className="p-4 bg-sun/10 border-l-2 border-sun text-sm text-ink-800 inline-block">
              <strong>Status Data:</strong> Angka kependudukan menggunakan data tervalidasi tahun
              2026.
            </div>
          </div>

          {/* Profil Kepala Desa */}
          <div className="w-full lg:w-[380px] flex-shrink-0 bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center shadow-sm">
            <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-white shadow-sm mb-4">
              <Image
                src="/gambar/kepala-desa-bajawali.webp"
                alt="Kepala Desa Bajawali"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-editorial text-2xl text-ink-950 mb-1">Ketut Langga</h3>
              <div className="text-xs font-bold uppercase tracking-widest text-green-700">Kepala Desa Bajawali</div>
            </div>
            <div className="relative">
              <p className="text-ink-700 leading-relaxed italic text-[15px] relative z-10">
                "Data dan statistik ini merupakan bentuk komitmen kami terhadap transparansi untuk membangun Desa Bajawali yang lebih terukur, maju, dan sejahtera."
              </p>
            </div>
          </div>
        </div>

        {/* KPI Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="border-t border-paper-200 pt-6">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-2">
              Populasi
            </div>
            <div className="font-editorial text-4xl text-ink-950 mb-2">
              {desaInfo.penduduk} <span className="text-lg text-ink-400 font-sans">jiwa</span>
            </div>
            <div className="text-xs text-ink-600 bg-paper-100 inline-block px-2 py-1 rounded-sm">
              Data Desa &bull; 2026
            </div>
          </div>

          <div className="border-t border-paper-200 pt-6">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-2">
              Luas Wilayah
            </div>
            <div className="font-editorial text-4xl text-ink-950 mb-2">
              {desaInfo.luasWilayah} <span className="text-lg text-ink-400 font-sans">km²</span>
            </div>
            <div className="text-xs text-ink-600 bg-paper-100 inline-block px-2 py-1 rounded-sm">
              BPS &bull; Kandidat sumber
            </div>
          </div>

          <div className="border-t border-paper-200 pt-6">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-2">
              Kepala Keluarga
            </div>
            <div className="font-editorial text-4xl text-ink-950 mb-2">
              {desaInfo.kk} <span className="text-lg text-ink-400 font-sans">KK</span>
            </div>
            <div className="text-xs text-ink-600 bg-paper-100 inline-block px-2 py-1 rounded-sm">
              Data Desa
            </div>
          </div>

          <div className="border-t border-paper-200 pt-6">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-2">
              RT / Dusun
            </div>
            <div className="font-editorial text-4xl text-ink-950 mb-2">
              {desaInfo.rt}{' '}
              <span className="text-lg text-ink-400 font-sans">/ {desaInfo.dusun}</span>
            </div>
            <div className="text-xs text-ink-600 bg-paper-100 inline-block px-2 py-1 rounded-sm">
              Data Desa
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {/* Chart: Demografi Kelompok Umur */}
            <div className="bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md">
              <div className="mb-6">
                <h3 className="font-editorial text-2xl text-ink-950 mb-2">
                  Kelompok Umur Penduduk
                </h3>
                <p className="text-sm text-ink-600">
                  Distribusi usia penduduk Desa Bajawali (Data valid 2026)
                </p>
              </div>
              <div className="h-[350px] w-full">
                <KelompokUmurBarChartWrapper />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Chart: Kategori Berita */}
            <div className="lg:col-span-1 bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md flex flex-col">
              <div className="mb-6">
                <h3 className="font-editorial text-2xl text-ink-950 mb-2">Fokus Kegiatan</h3>
                <p className="text-sm text-ink-600">Proporsi kategori publikasi.</p>
              </div>
              <div className="flex-1 h-[250px] w-full">
                <KategoriDoughnutChartWrapper />
              </div>
            </div>

            {/* Additional Text Info */}
            <div className="lg:col-span-2 border border-paper-200 p-6 md:p-8 rounded-md flex flex-col justify-center bg-paper-100">
              <h3 className="font-editorial text-3xl text-ink-950 mb-4">Pengembangan Data</h3>
              <p className="text-ink-800 leading-relaxed mb-6">
                Kedepannya, halaman Data Desa ini akan diintegrasikan dengan sistem informasi
                pemerintah desa, sehingga indikator seperti tingkat pendidikan, mata pencaharian
                utama, dan potensi ekonomi dapat dipantau secara langsung oleh publik secara
                transparan.
              </p>
              <div className="text-sm font-semibold text-green-700">Pemerintah Desa Bajawali</div>
            </div>
          </div>

          {/* New Charts: Agama, Suku, Status Pernikahan, Wilayah */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-12 border-t border-paper-200">
            {/* Chart: Agama */}
            <div className="bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md flex flex-col">
              <div className="mb-6">
                <h3 className="font-editorial text-2xl text-ink-950 mb-2">Kepercayaan & Agama</h3>
                <p className="text-sm text-ink-600">Distribusi pemeluk agama (Data valid 2026)</p>
              </div>
              <div className="flex-1 h-[250px] w-full">
                <AgamaDoughnutChartWrapper />
              </div>
            </div>

            {/* Chart: Komposisi Suku */}
            <div className="bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md flex flex-col">
              <div className="mb-6">
                <h3 className="font-editorial text-2xl text-ink-950 mb-2">Komposisi Suku</h3>
                <p className="text-sm text-ink-600">Sebaran Suku Warga (Data valid 2026)</p>
              </div>
              <div className="flex-1 h-[250px] w-full">
                <SukuDoughnutChartWrapper />
              </div>
            </div>

            {/* Chart: Status Pernikahan */}
            <div className="bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md flex flex-col">
              <div className="mb-6">
                <h3 className="font-editorial text-2xl text-ink-950 mb-2">Status Pernikahan</h3>
                <p className="text-sm text-ink-600">Kawin vs Belum Kawin (Data valid 2026)</p>
              </div>
              <div className="flex-1 h-[250px] w-full">
                <StatusPernikahanPieChartWrapper />
              </div>
            </div>

            {/* Chart: Wilayah */}
            <div className="bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md flex flex-col">
              <div className="mb-6">
                <h3 className="font-editorial text-2xl text-ink-950 mb-2">Distribusi Wilayah</h3>
                <p className="text-sm text-ink-600">Sebaran Populasi per Dusun (Data valid 2026)</p>
              </div>
              <div className="flex-1 h-[300px] w-full">
                <DistribusiWilayahBarChartWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
