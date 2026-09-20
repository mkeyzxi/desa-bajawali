export const metadata = {
  title: "Visi & Misi Desa Bajawali",
};

export default function VisiMisiPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">Profil Desa</span>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
            Visi & Misi
          </h1>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-12"></div>
          
          <div className="bg-paper-100 p-8 md:p-16 border border-paper-200 rounded-lg">
            <h2 className="text-sm font-bold uppercase tracking-widest text-green-700 mb-6">Visi Desa Bajawali</h2>
            <blockquote className="font-editorial text-2xl md:text-4xl text-ink-950 leading-relaxed font-medium">
              &quot;Visi resmi pemerintah Desa Bajawali &mdash; menunggu data tervalidasi.&quot;
            </blockquote>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-green-700 mb-8 text-center">Misi Desa Bajawali</h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md">
              <div className="font-editorial text-4xl text-ink-400">01</div>
              <div>
                <h3 className="font-editorial text-xl font-semibold text-ink-950 mb-2">Penyelenggaraan Pemerintahan</h3>
                <p className="text-ink-800">Menyelenggarakan pemerintahan desa yang bersih, demokratis, dan terbebas dari korupsi, kolusi, dan nepotisme serta bentuk penyelewengan lainnya.</p>
              </div>
            </div>
            
            <div className="flex gap-6 bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md">
              <div className="font-editorial text-4xl text-ink-400">02</div>
              <div>
                <h3 className="font-editorial text-xl font-semibold text-ink-950 mb-2">Pembangunan Infrastruktur</h3>
                <p className="text-ink-800">Meningkatkan pembangunan infrastruktur yang mendukung perekonomian desa, seperti jalan, jembatan, dan saluran irigasi.</p>
              </div>
            </div>

            <div className="flex gap-6 bg-paper-50 border border-paper-200 p-6 md:p-8 rounded-md">
              <div className="font-editorial text-4xl text-ink-400">03</div>
              <div>
                <h3 className="font-editorial text-xl font-semibold text-ink-950 mb-2">Pemberdayaan Ekonomi</h3>
                <p className="text-ink-800">Meningkatkan perekonomian masyarakat melalui pendampingan UMKM dan sektor pertanian.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-4 bg-sun/10 border-l-2 border-sun text-sm text-ink-800">
            <strong>Catatan fase awal:</strong> Misi di atas adalah *placeholder* (teks contoh) dan harus diganti dengan misi resmi setelah dokumen pemerintah desa divalidasi.
          </div>
        </div>

      </div>
    </div>
  );
}
