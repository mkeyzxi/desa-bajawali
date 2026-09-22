import { Clock, MapPin } from 'lucide-react';
import Map from '@/components/map/MapWrapper';

export const metadata = {
  title: "Kontak & Lokasi Desa Bajawali",
};

export default function KontakPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">Hubungi Kami</span>
          </div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-8">
            Kontak & Lokasi
          </h1>
          <p className="text-ink-800 text-lg leading-relaxed">
            Pusat pelayanan administrasi dan informasi Desa Bajawali. Silakan hubungi kami atau kunjungi kantor desa pada jam kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-paper-50 border border-paper-200 p-8 rounded-md">
              <h2 className="font-editorial text-2xl text-ink-950 mb-6">Kantor Desa Bajawali</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <MapPin className="text-green-700 mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="block text-ink-950 font-medium mb-1">Alamat</strong>
                    <span className="text-ink-800 text-sm leading-relaxed">
                      Desa Bajawali<br />
                      Kecamatan Lariang<br />
                      Kabupaten Pasangkayu<br />
                      Provinsi Sulawesi Barat
                    </span>
                  </div>
                </li>
                
                <li className="flex gap-4 items-start">
                  <Clock className="text-green-700 mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="block text-ink-950 font-medium mb-1">Jam Pelayanan</strong>
                    <span className="text-ink-800 text-sm block mb-1">Senin - Jumat: 08.00 - 15.00 WITA</span>
                    <span className="text-ink-400 text-xs block">Libur pada hari Sabtu, Minggu, dan hari libur nasional</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-paper-200 flex flex-col gap-3">
                <a href="https://www.google.com/maps/place/Bajawali,+Kec.+Lariang,+Kab.+Pasangkayu,+Sulawesi+Barat/@-1.4914143,119.3567075,3482m/data=!3m1!1e3!4m6!3m5!1s0x2d8cf9abf9303445:0xcc92ae06702c7a48!8m2!3d-1.4904673!4d119.3656846!16s%2Fg%2F1hm2l8386?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 text-white hover:bg-green-800 px-6 py-3 rounded-md font-medium transition-colors w-full">
                  Buka di Google Maps
                </a>
                <button className="inline-flex items-center justify-center bg-transparent border border-paper-200 text-ink-800 hover:bg-paper-100 px-6 py-3 rounded-md font-medium transition-colors w-full">
                  Salin Alamat
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7" id="peta">
            <div className="h-[500px] lg:h-full min-h-[500px] w-full bg-paper-200 border border-paper-200 rounded-md overflow-hidden relative">
              <Map latitude={-1.4904673} longitude={119.3656846} zoom={13} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
