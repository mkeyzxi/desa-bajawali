import Image from 'next/image'
import Link from 'next/link'
import {desaInfo, beritaDummy} from '@/data/dummy'
import HeroCarousel from '@/components/layout/HeroCarousel'
import { NavigationChevron } from '@/components/ui/NavigationChevron'

export default function Home() {
  const featureNews = beritaDummy[0]
  const otherNews = beritaDummy.slice(1, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Sekilas Desa */}
      <section className="py-16 md:py-24 border-b border-paper-200">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-400">
            01 / Tentang Bajawali
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h2 className="font-editorial text-3xl md:text-4xl font-semibold text-ink-950 mb-6 leading-tight">
                Mengenal Desa Bajawali lebih dekat.
              </h2>
              <div className="prose prose-xl prose-p:text-ink-800 prose-p:leading-relaxed max-w-none">
                <p>
                  Desa Bajawali berada di Kecamatan {desaInfo.kecamatan}, Kabupaten{' '}
                  {desaInfo.kabupaten}, Provinsi {desaInfo.provinsi}. Desa Bajawali memiliki luas
                  wilayah {desaInfo.luasWilayah} Ha dengan ketinggian {desaInfo.ketinggian} mdpl,
                  curah hujan {desaInfo.curahHujan}, dan suhu rata-rata {desaInfo.suhu}.
                </p>
                <p>
                  Desa Bajawali dihuni <strong>{desaInfo.penduduk} jiwa</strong> yang tergabung
                  dalam <strong>{desaInfo.kk} kepala keluarga</strong>, tersebar di{' '}
                  {desaInfo.dusun} dusun dan {desaInfo.rt} RT. Nama Bajawali berasal dari kata
                  Sanskerta <strong>JAVA</strong> dan <strong>BALI</strong> yang berarti
                  &quot;Kelahiran dan Tempat Berpijak&quot;, dengan moto desa{' '}
                  <strong>{desaInfo.moto}</strong>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8">
              <div className="border-t border-paper-200 pt-4">
                <div className="font-editorial text-4xl text-ink-950 mb-1">
                  {desaInfo.luasWilayah} Ha
                </div>
                <div className="text-sm font-semibold text-ink-600">Luas wilayah</div>
                <div className="text-xs text-ink-400 mt-1">Profil Desa {desaInfo.tahunData}</div>
              </div>
              <div className="border-t border-paper-200 pt-4">
                <div className="font-editorial text-4xl text-ink-950 mb-1">
                  {desaInfo.kecamatan}
                </div>
                <div className="text-sm font-semibold text-ink-600">Kecamatan</div>
              </div>
              <div className="border-t border-paper-200 pt-4">
                <div className="font-editorial text-4xl text-ink-950 mb-1">
                  {desaInfo.kabupaten}
                </div>
                <div className="text-sm font-semibold text-ink-600">Kabupaten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik Singkat (Rail) */}
      <section className="bg-paper-100 border-b border-paper-200">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-paper-200">
            <div className="py-8 md:py-12 px-4 md:px-6 flex flex-col items-center text-center">
              <div className="text-sm font-semibold text-ink-600 mb-2">Penduduk</div>
              <div className="font-editorial text-4xl md:text-5xl font-semibold text-ink-950 mb-2">
                {desaInfo.penduduk}
              </div>
            </div>
            <div className="py-8 md:py-12 px-4 md:px-6 flex flex-col items-center text-center">
              <div className="text-sm font-semibold text-ink-600 mb-2">Kepala Keluarga</div>
              <div className="font-editorial text-4xl md:text-5xl font-semibold text-ink-950 mb-2">
                {desaInfo.kk}
              </div>
            </div>
            <div className="py-8 md:py-12 px-4 md:px-6 flex flex-col items-center text-center">
              <div className="text-sm font-semibold text-ink-600 mb-2">Dusun</div>
              <div className="font-editorial text-4xl md:text-5xl font-semibold text-ink-950 mb-2">
                {desaInfo.dusun}
              </div>
            </div>
            <div className="py-8 md:py-12 px-4 md:px-6 flex flex-col items-center text-center border-l md:border-l-0 border-paper-200">
              <div className="text-sm font-semibold text-ink-600 mb-2">RT</div>
              <div className="font-editorial text-4xl md:text-5xl font-semibold text-ink-950 mb-2">
                {desaInfo.rt}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil Singkat (Grid Modul Asimetris) */}
      <section className="py-16 md:py-24 border-b border-paper-200">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-400">
            02 / PROFIL SINGKAT
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8">
            {/* Sejarah */}
            <Link
              href="/profil/sejarah"
              className="md:col-span-7 group block bg-paper-50 border border-paper-200 p-6 md:p-8 hover:border-green-300 transition-colors"
            >
              <h3 className="font-editorial text-2xl text-ink-950 mb-3 group-hover:text-green-800 transition-colors">
                Sejarah Desa
              </h3>
              <p className="text-ink-600 mb-6">
                Mempelajari asal-usul, perkembangan wilayah, dan dinamika yang membentuk Desa
                Bajawali hingga saat ini.
              </p>
              <div className="text-sm font-semibold text-green-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Baca selengkapnya <NavigationChevron direction="next" />
              </div>
            </Link>

            {/* Geografis */}
            <Link
              href="/profil/geografis"
              className="md:col-span-5 group block bg-paper-50 border border-paper-200 p-6 md:p-8 hover:border-green-300 transition-colors"
            >
              <h3 className="font-editorial text-2xl text-ink-950 mb-3 group-hover:text-green-800 transition-colors">
                Geografis
              </h3>
              <p className="text-ink-600 mb-6">
                Kondisi topografi, luasan wilayah, dan batas administrasi.
              </p>
              <div className="text-sm font-semibold text-green-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Lihat peta & data <NavigationChevron direction="next" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Demografi */}
            <Link
              href="/profil/demografi"
              className="md:col-span-5 group block bg-paper-50 border border-paper-200 p-6 md:p-8 hover:border-green-300 transition-colors"
            >
              <h3 className="font-editorial text-2xl text-ink-950 mb-3 group-hover:text-green-800 transition-colors">
                Demografi
              </h3>
              <div className="font-editorial text-3xl text-ink-950 mb-2">
                {desaInfo.penduduk} <span className="text-sm font-sans text-ink-400">Jiwa</span>
              </div>
              <p className="text-ink-600 mb-6">
                Data kependudukan berdasarkan jenis kelamin dan usia.
              </p>
              <div className="text-sm font-semibold text-green-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Lihat data <NavigationChevron direction="next" />
              </div>
            </Link>

            {/* Pemerintahan */}
            <Link
              href="/profil/struktur-pemerintahan"
              className="md:col-span-7 group block bg-paper-50 border border-paper-200 p-6 md:p-8 hover:border-green-300 transition-colors"
            >
              <h3 className="font-editorial text-2xl text-ink-950 mb-3 group-hover:text-green-800 transition-colors">
                Pemerintahan
              </h3>
              <div className="font-editorial text-3xl text-ink-950 mb-2">
                Ketut Langga, S.Ag <span className="text-sm font-sans text-ink-400">Kepala Desa</span>
              </div>
              <p className="text-ink-600 mb-6">
                Struktur organisasi pemerintahan desa, tokoh masyarakat, dan sistem pelayanan
                administrasi publik.
              </p>
              <div className="text-sm font-semibold text-green-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Lihat struktur <NavigationChevron direction="next" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Potensi Desa */}
      <section className="py-16 md:py-24 border-b border-paper-200 bg-paper-50">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-400">
            03 / POTENSI DESA
          </div>
          <div className="max-w-2xl mb-12">
            <h2 className="font-editorial text-3xl md:text-4xl font-semibold text-ink-950 mb-4 leading-tight">
              Yang tumbuh dari tanah dan kerja masyarakat.
            </h2>
            <p className="text-ink-800">
              Potensi Desa Bajawali bertumpu pada hasil pertanian kelapa sawit sebagai komoditas
              andalan, ditemani berkembangnya usaha mikro, kecil, dan menengah (UMKM), 10 kelompok
              tani, serta partisipasi masyarakat dalam gotong royong dan kegiatan ekonomi desa.
            </p>
          </div>

          {/* Grid Komposisi */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
            {/* Pertanian (Large) */}
            <Link
              href="/potensi/pertanian"
              className="group md:col-span-8 md:row-span-2 relative block overflow-hidden border border-paper-200 h-[300px] md:h-full"
            >
              <Image
                src="https://images.pexels.com/photos/1576398/pexels-photo-1576398.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Potensi Pertanian"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
                  01
                </span>
                <h3 className="font-editorial text-2xl md:text-3xl text-white mb-2">Pertanian</h3>
                <p className="text-white/90 mb-4 max-w-md hidden md:block">
                  Kelapa sawit sebagai komoditas andalan warga, ditopang 10 kelompok tani dan 1
                  Gapoktan.
                </p>
                <div className="text-sm font-semibold text-white flex items-center gap-1">
                  <span className="border-b border-white group-hover:border-transparent transition-colors">
                    Lihat potensi
                  </span>{' '}
                  <span className="transition-transform group-hover:translate-x-1"><NavigationChevron direction="next" /></span>
                </div>
              </div>
            </Link>

            {/* UMKM */}
            <Link
              href="/potensi/umkm"
              className="group md:col-span-4 relative block overflow-hidden border border-paper-200 h-[250px] md:h-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop"
                alt="UMKM"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
                  02
                </span>
                <h3 className="font-editorial text-xl md:text-2xl text-white mb-2">UMKM</h3>
                <div className="text-sm font-semibold text-white flex items-center gap-1">
                  <span className="border-b border-white group-hover:border-transparent transition-colors">
                    Lihat potensi
                  </span>{' '}
                  <span className="transition-transform group-hover:translate-x-1"><NavigationChevron direction="next" /></span>
                </div>
              </div>
            </Link>

            {/* Perikanan & Pariwisata Split */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4 md:gap-6 h-[200px] md:h-auto">
              {/* Pariwisata */}
              <Link
                href="/potensi/pariwisata"
                className="group relative block overflow-hidden border border-paper-200"
              >
                <div className="absolute inset-0 bg-paper-100 group-hover:bg-paper-200 transition-colors"></div>
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <span className="text-ink-400 text-xs font-bold uppercase tracking-widest mb-1">
                    03
                  </span>
                  <h3 className="font-editorial text-lg text-ink-950 mb-1">Pariwisata</h3>
                  <div className="text-xs font-semibold text-green-700"><NavigationChevron direction="next" /></div>
                </div>
              </Link>

              {/* SDA */}
              <Link
                href="/potensi/sumber-daya-alam"
                className="group relative block overflow-hidden border border-paper-200"
              >
                <div className="absolute inset-0 bg-paper-100 group-hover:bg-paper-200 transition-colors"></div>
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <span className="text-ink-400 text-xs font-bold uppercase tracking-widest mb-1">
                    04
                  </span>
                  <h3 className="font-editorial text-lg text-ink-950 mb-1">SDA</h3>
                  <div className="text-xs font-semibold text-green-700"><NavigationChevron direction="next" /></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Berita Terkini */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-400">
                04 / KABAR DESA
              </div>
              <h2 className="font-editorial text-3xl md:text-4xl font-semibold text-ink-950 leading-tight">
                Berita & Kegiatan
              </h2>
            </div>
            <Link
              href="/berita"
              className="hidden md:flex text-sm font-semibold text-green-700 items-center gap-1 hover:text-green-800 transition-colors"
            >
              Lihat semua berita <NavigationChevron direction="next" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Feature Article */}
            <div className="lg:col-span-7">
              <Link href={`/berita/${featureNews.slug}`} className="group block">
                <div className="relative aspect-[16/10] mb-6 overflow-hidden border border-paper-200 rounded-md">
                  <Image
                    src={featureNews.image}
                    alt={featureNews.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                  />
                  <div className="absolute top-4 left-4 bg-paper-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink-800 rounded-sm">
                    {featureNews.category}
                  </div>
                </div>
                <div className="text-sm text-ink-600 mb-2">{featureNews.date}</div>
                <h3 className="font-editorial text-2xl md:text-3xl text-ink-950 font-semibold mb-3 group-hover:text-green-800 transition-colors">
                  {featureNews.title}
                </h3>
                <p className="text-ink-800 line-clamp-2 leading-relaxed">{featureNews.excerpt}</p>
              </Link>
            </div>

            {/* Secondary Articles */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {otherNews.map((news) => (
                <Link
                  href={`/berita/${news.slug}`}
                  key={news.id}
                  className="group flex gap-4 md:gap-6 items-start border-t border-paper-200 pt-6 lg:border-t-0 lg:pt-0"
                >
                  <div className="w-1/3 aspect-[4/3] relative rounded-md overflow-hidden border border-paper-200 shrink-0">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-50 px-2 py-0.5 rounded-sm">
                        {news.category}
                      </span>
                    </div>
                    <h4 className="font-editorial text-lg text-ink-950 font-semibold leading-snug group-hover:text-green-800 transition-colors mb-1 line-clamp-2">
                      {news.title}
                    </h4>
                    <div className="text-xs text-ink-400">{news.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/berita"
              className="block text-center border border-paper-200 py-3 rounded-md text-sm font-semibold text-ink-800 hover:bg-paper-100 transition-colors"
            >
              Lihat semua berita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
