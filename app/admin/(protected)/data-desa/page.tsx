export const metadata = {
  title: 'Kelola Data Desa — CMS Desa Bajawali',
}

export default function AdminDataDesaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Kelola Data Desa
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Pengelolaan data demografi dan statistik desa. (Dalam Pengembangan)
        </p>
      </div>

      <div className="bg-white border border-paper-200 rounded-lg p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-ink-950 mb-2">Fitur Segera Hadir</h3>
        <p className="text-ink-600 max-w-md mx-auto text-sm">
          Modul pengelolaan Data Desa (Demografi, Pendidikan, Pekerjaan, dll) sedang dalam tahap pengembangan dan akan tersedia pada pembaruan sistem berikutnya.
        </p>
        <p className="text-ink-500 mt-4 text-xs bg-paper-50 inline-block px-3 py-1.5 rounded-md border border-paper-100">
          Saat ini website publik masih menggunakan data dummy dari sistem lama.
        </p>
      </div>
    </div>
  )
}
