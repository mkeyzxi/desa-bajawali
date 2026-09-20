export const metadata = {
  title: "Struktur Pemerintahan Desa Bajawali",
};

export default function StrukturPemerintahanPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">Profil Desa</span>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8 text-center">
            Struktur Pemerintahan
          </h1>
          <p className="text-ink-800 text-lg text-center max-w-2xl mx-auto mb-16">
            Sistem pemerintahan dan kelembagaan yang mengatur jalannya administrasi, pembangunan, dan pelayanan masyarakat di Desa Bajawali.
          </p>

          <div className="mb-16 bg-paper-50 p-6 md:p-12 border border-paper-200 rounded-md flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-paper-200 rounded-full mb-4 border-2 border-paper-200"></div>
            <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">Kepala Desa</div>
            <h2 className="font-editorial text-2xl font-semibold text-ink-950 mb-2">[Nama Kepala Desa]</h2>
            <p className="text-ink-600 text-sm max-w-md mx-auto">
              Memimpin penyelenggaraan pemerintahan desa, pelaksanaan pembangunan desa, pembinaan kemasyarakatan desa, dan pemberdayaan masyarakat desa.
            </p>
          </div>

          {/* Bagan Grid Horizontal */}
          <div className="mb-12">
            <h3 className="font-editorial text-2xl text-ink-950 text-center mb-8 border-b border-paper-200 pb-4">
              Perangkat Desa
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
                <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Sekretaris Desa</div>
                <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Sekdes]</h4>
              </div>

              <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
                <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kaur Keuangan</div>
                <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kaur]</h4>
              </div>

              <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
                <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kaur Perencanaan</div>
                <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kaur]</h4>
              </div>
              
              <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
                <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kasi Pemerintahan</div>
                <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kasi]</h4>
              </div>

              <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
                <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kasi Kesejahteraan</div>
                <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kasi]</h4>
              </div>

              <div className="bg-paper-50 border border-paper-200 p-6 rounded-md text-center">
                <div className="w-16 h-16 bg-paper-200 rounded-full mx-auto mb-3"></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">Kasi Pelayanan</div>
                <h4 className="font-editorial text-xl font-semibold text-ink-950">[Nama Kasi]</h4>
              </div>
              
            </div>
          </div>

          <div className="p-4 bg-sun/10 border-l-2 border-sun text-sm text-ink-800 mt-12 text-center">
            <strong>Catatan Dummy:</strong> Struktur jabatan dan nama pejabat adalah <em>placeholder</em> yang perlu disesuaikan dengan data nyata dari Pemerintah Desa Bajawali.
          </div>
          
        </div>

      </div>
    </div>
  );
}
