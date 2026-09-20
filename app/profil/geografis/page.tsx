import { desaInfo } from "@/data/dummy";
import Map from '@/components/map/MapWrapper';

export const metadata = {
  title: "Kondisi Geografis Desa Bajawali",
};

export default function GeografisPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        <div className="max-w-3xl mx-auto mb-16">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">Profil Desa</span>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
            Kondisi Geografis
          </h1>
          
          <div className="prose prose-xl prose-p:text-ink-800 prose-headings:font-editorial prose-headings:text-ink-950 max-w-none">
            <p className="text-xl font-medium text-ink-950 leading-relaxed mb-8">
              Secara administratif, {desaInfo.name} berada di wilayah Kecamatan {desaInfo.kecamatan}, Kabupaten {desaInfo.kabupaten}, Provinsi {desaInfo.provinsi}.
            </p>
            
            <p>
              Dengan luas wilayah sebesar <strong>{desaInfo.luasWilayah} km²</strong> (merujuk pada kandidat data terverifikasi BPS), kawasan ini memiliki komposisi lahan yang bervariasi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
              <div className="border border-paper-200 p-6 rounded-md">
                <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-2">Iklim</div>
                <div className="font-editorial text-2xl text-ink-950 mb-2">Tropis</div>
                <p className="text-sm text-ink-600">Curah hujan sedang dengan dua musim utama.</p>
              </div>
              <div className="border border-paper-200 p-6 rounded-md">
                <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-2">Topografi</div>
                <div className="font-editorial text-2xl text-ink-950 mb-2">Dataran Rendah</div>
                <p className="text-sm text-ink-600">Sebagian besar wilayah cocok untuk pertanian.</p>
              </div>
            </div>

            <h2>Batas Wilayah</h2>
            <ul>
              <li><strong>Utara:</strong> [Menunggu Data Validasi]</li>
              <li><strong>Selatan:</strong> [Menunggu Data Validasi]</li>
              <li><strong>Timur:</strong> [Menunggu Data Validasi]</li>
              <li><strong>Barat:</strong> [Menunggu Data Validasi]</li>
            </ul>
          </div>
        </div>

        {/* Peta Mini */}
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="font-editorial text-2xl text-ink-950 mb-6">Peta Lokasi</h3>
          <div className="h-[400px] w-full bg-paper-200 border border-paper-200 rounded-lg overflow-hidden relative">
            <Map latitude={-1.4904673} longitude={119.3656846} zoom={13} />
            <div className="absolute top-4 right-4 z-[400] bg-white/90 p-3 text-xs shadow-sm border border-paper-200 rounded-md">
              <p className="font-semibold text-ink-950">Koordinat Referensi</p>
              <p className="text-ink-600">-1.4904673, 119.3656846</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-sun/10 border-l-2 border-sun text-sm text-ink-800">
            <strong>Catatan peta:</strong> Peta ini menggunakan Google Maps untuk menampilkan batas administratif wilayah secara langsung sesuai ketersediaan data pemetaan publik.
          </div>
        </div>

      </div>
    </div>
  );
}
