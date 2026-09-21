// import Image from "next/image";

// export const metadata = {
//   title: "Struktur Pemerintahan Desa Bajawali",
// };

// export default function StrukturPemerintahanPage() {
//   return (
//     <div className="py-12 md:py-24">
//       <div className="container mx-auto px-5 lg:px-8">

//         <div className="max-w-4xl mx-auto">
//           <div className="mb-6 text-center">
//             <span className="text-xs font-bold uppercase tracking-widest text-ink-400">Profil Desa</span>
//           </div>
//           <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8 text-center">
//             Struktur Pemerintahan
//           </h1>
//           <p className="text-ink-800 text-lg text-center max-w-2xl mx-auto mb-16">
//             Sistem pemerintahan dan kelembagaan yang mengatur jalannya administrasi, pembangunan, dan pelayanan masyarakat di Desa Bajawali.
//           </p>

//           <div className="mb-16 bg-paper-50 p-6 md:p-12 border border-paper-200 rounded-md flex flex-col items-center text-center">
//             <div className="w-28 h-28 relative rounded-full mb-4 border-4 border-white shadow-sm overflow-hidden">
//               <Image
//                 src="/gambar/kepala-desa-bajawali.webp"
//                 alt="Kepala Desa Bajawali"
//                 fill
//                 className="object-cover object-top"
//               />
//             </div>
//             <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">Kepala Desa</div>
//             <h2 className="font-editorial text-2xl font-semibold text-ink-950 mb-2">Ketut Langga</h2>
//             <p className="text-ink-600 text-sm max-w-md mx-auto">
//               Memimpin penyelenggaraan pemerintahan desa, pelaksanaan pembangunan desa, pembinaan kemasyarakatan desa, dan pemberdayaan masyarakat desa.
//             </p>
//           </div>

//           {/* Bagan Grid Horizontal */}
//           <div className="mb-12">
//             <h3 className="font-editorial text-2xl text-ink-950 text-center mb-8 border-b border-paper-200 pb-4">
//               Perangkat Desa
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//               <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
//                 <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
//                 <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Sekretaris Desa</div>
//                 <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Sekdes]</h4>
//               </div>

//               <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
//                 <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
//                 <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kaur Keuangan</div>
//                 <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kaur]</h4>
//               </div>

//               <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
//                 <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
//                 <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kaur Perencanaan</div>
//                 <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kaur]</h4>
//               </div>

//               <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
//                 <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
//                 <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kasi Pemerintahan</div>
//                 <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kasi]</h4>
//               </div>

//               <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
//                 <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
//                 <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kasi Kesejahteraan</div>
//                 <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kasi]</h4>
//               </div>

//               <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
//                 <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
//                 <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kasi Pelayanan</div>
//                 <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kasi]</h4>
//               </div>

//             </div>
//           </div>

//           <div className="p-4 bg-sun/10 border-l-2 border-sun text-sm text-ink-800 mt-12 text-center">
//             <strong>Catatan Dummy:</strong> Struktur jabatan dan nama pejabat adalah <em>placeholder</em> yang perlu disesuaikan dengan data nyata dari Pemerintah Desa Bajawali.
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

import Image from 'next/image'
export const metadata = {title: 'Struktur Pemerintahan Desa Bajawali'}
const perangkatDesa = [
  {
    jabatan: 'Sekretaris Desa',
    nama: '[Nama Sekdes]',
    image: '/gambar/perangkat-desa/sekretaris-desa.webp',
  },
  {
    jabatan: 'Kaur Keuangan',
    nama: '[Nama Kaur]',
    image: '/gambar/perangkat-desa/kaur-keuangan.webp',
  },
  {
    jabatan: 'Kaur Perencanaan',
    nama: '[Nama Kaur]',
    image: '/gambar/perangkat-desa/kaur-perencanaan.webp',
  },
  {
    jabatan: 'Kasi Pemerintahan',
    nama: '[Nama Kasi]',
    image: '/gambar/perangkat-desa/kasi-pemerintahan.webp',
  },
  {
    jabatan: 'Kasi Kesejahteraan',
    nama: '[Nama Kasi]',
    image: '/gambar/perangkat-desa/kasi-kesejahteraan.webp',
  },
  {
    jabatan: 'Kasi Pelayanan',
    nama: '[Nama Kasi]',
    image: '/gambar/perangkat-desa/kasi-pelayanan.webp',
  },
]
export default function StrukturPemerintahanPage() {
  return (
    <div className="py-12 md:py-24">
      {' '}
      <div className="container mx-auto px-5 lg:px-8">
        {' '}
        <div className="max-w-5xl mx-auto">
          {' '}
          {/* Header */}{' '}
          <div className="max-w-4xl mx-auto">
            {' '}
            <div className="mb-6 text-center">
              {' '}
              <span className="text-xs font-bold uppercase tracking-widest text-ink-400">
                {' '}
                Profil Desa{' '}
              </span>{' '}
            </div>{' '}
            <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8 text-center">
              {' '}
              Struktur Pemerintahan{' '}
            </h1>{' '}
            <p className="text-ink-800 text-lg text-center max-w-2xl mx-auto mb-16">
              {' '}
              Sistem pemerintahan dan kelembagaan yang mengatur jalannya administrasi, pembangunan,
              dan pelayanan masyarakat di Desa Bajawali.{' '}
            </p>{' '}
          </div>{' '}
          {/* Kepala Desa */}{' '}
          <section className="mb-20">
            {' '}
            <div className="bg-paper-50 border border-paper-200 rounded-md overflow-hidden">
              {' '}
              <div className="grid md:grid-cols-[280px_1fr]">
                {' '}
                {/* Foto */}{' '}
                <div className="relative h-[360px] md:h-[400px] bg-paper-200">
                  {' '}
                  <Image
                    src="/gambar/kepala-desa-bajawali.webp"
                    alt="Kepala Desa Bajawali"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />{' '}
                </div>{' '}
                {/* Informasi */}{' '}
                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                  {' '}
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-700 mb-3">
                    {' '}
                    Kepala Desa{' '}
                  </span>{' '}
                  <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl font-semibold text-ink-950 leading-tight mb-5">
                    {' '}
                    Ketut Langga{' '}
                  </h2>{' '}
                  <div className="w-12 h-px bg-paper-300 mb-5" />{' '}
                  <p className="text-ink-600 text-base md:text-lg leading-relaxed max-w-xl">
                    {' '}
                    Memimpin penyelenggaraan pemerintahan desa, pelaksanaan pembangunan desa,
                    pembinaan kemasyarakatan desa, dan pemberdayaan masyarakat desa.{' '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          {/* Perangkat Desa */}{' '}
          <section>
            {' '}
            <div className="mb-10">
              {' '}
              <div className="flex items-center gap-4">
                {' '}
                <h3 className="font-editorial text-2xl md:text-3xl text-ink-950 whitespace-nowrap">
                  {' '}
                  Perangkat Desa{' '}
                </h3>{' '}
                <div className="h-px bg-paper-200 flex-1" />{' '}
              </div>{' '}
              <p className="text-ink-500 text-sm mt-3 max-w-xl">
                {' '}
                Unsur pelaksana yang mendukung penyelenggaraan pemerintahan dan pelayanan masyarakat
                di Desa Bajawali.{' '}
              </p>{' '}
            </div>{' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {' '}
              {perangkatDesa.map((perangkat) => (
                <div
                  key={perangkat.jabatan}
                  className="bg-paper-50 border border-paper-200 rounded-md p-5 md:p-6 text-center"
                >
                  {' '}
                  {/* Foto */}{' '}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-5 rounded-full overflow-hidden border-4 border-white shadow-sm bg-paper-200">
                    {' '}
                    <Image
                      src={perangkat.image}
                      alt={perangkat.jabatan}
                      fill
                      className="object-cover object-top"
                      sizes="112px"
                    />{' '}
                  </div>{' '}
                  <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-green-700 mb-2">
                    {' '}
                    {perangkat.jabatan}{' '}
                  </div>{' '}
                  <h4 className="font-editorial text-xl md:text-2xl font-semibold text-ink-950">
                    {' '}
                    {perangkat.nama}{' '}
                  </h4>{' '}
                </div>
              ))}{' '}
            </div>{' '}
          </section>{' '}
          {/* Catatan Dummy */}{' '}
          <div className="p-4 bg-sun/10 border-l-2 border-sun text-sm text-ink-800 mt-16 text-center">
            {' '}
            <strong>Catatan Dummy:</strong> Struktur jabatan dan nama pejabat adalah{' '}
            <em>placeholder</em> yang perlu disesuaikan dengan data nyata dari Pemerintah Desa
            Bajawali.{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}
