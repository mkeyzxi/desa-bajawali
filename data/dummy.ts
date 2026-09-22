export const desaInfo = {
  name: 'Desa Bajawali',
  kepalaDesa: 'Ketut Langga, S.Ag',
  kecamatan: 'Lariang',
  kabupaten: 'Pasangkayu',
  provinsi: 'Sulawesi Barat',
  penduduk: '835',
  lakiLaki: '436',
  perempuan: '399',
  kk: '257',
  dusun: '4',
  rt: '8',
  luasWilayah: '7.125,816', // Ha
  ketinggian: '0–500 mdpl',
  curahHujan: '177,5 mm/tahun',
  suhu: '22°C–31°C',
  moto: 'BAJAWALIKU JAYA',
  tahunData: '2026',
}

export const batasWilayah = [
  { arah: 'Utara', batas: 'Desa Parabu' },
  { arah: 'Timur', batas: 'Desa Karave, Kecamatan Bulutaba' },
  { arah: 'Selatan', batas: 'HGU PT Unggul Widya Tek' },
  { arah: 'Barat', batas: 'Desa Singgani' },
]

export const lembagaPerekonomian = [
  { nama: 'Gapoktan', jumlah: 1, satuan: 'kelompok' },
  { nama: 'BUMDesa', jumlah: 1, satuan: 'kelompok' },
  { nama: 'Kelompok Tani', jumlah: 10, satuan: 'kelompok' },
  { nama: 'Kelompok Ternak', jumlah: 1, satuan: 'kelompok' },
]

export type SaranaItem = {
  nama: string
  jumlah?: number
  satuan?: string
}

export const saranaDesa: { kategori: string; items: SaranaItem[] }[] = [
  {
    kategori: 'Kesehatan',
    items: [
      { nama: 'PUSTU', jumlah: 1, satuan: 'unit' },
      { nama: 'POSKESDES', jumlah: 1, satuan: 'unit' },
      { nama: 'POSYANDU', jumlah: 1, satuan: 'unit' },
    ],
  },
  {
    kategori: 'Peribadatan',
    items: [
      { nama: 'Pura', jumlah: 6, satuan: 'unit' },
      { nama: 'Masjid', jumlah: 1, satuan: 'unit' },
      { nama: 'Mushola', jumlah: 2, satuan: 'unit' },
    ],
  },
  {
    kategori: 'Olahraga',
    items: [
      { nama: 'Lapangan Voly', jumlah: 2, satuan: 'buah' },
      { nama: 'Lapangan Bola Kaki', jumlah: 1, satuan: 'buah' },
      { nama: 'Lapangan Takraw', jumlah: 1, satuan: 'buah' },
    ],
  },
  {
    kategori: 'Kesenian',
    items: [
      { nama: 'Seni Gamelan', jumlah: 2, satuan: 'grup' },
      { nama: 'Seni Tari', jumlah: 3, satuan: 'grup' },
      { nama: 'Upacara Adat', jumlah: 2, satuan: 'grup' },
    ],
  },
  {
    kategori: 'Transportasi',
    items: [
      { nama: 'Angkutan Pedesaan', jumlah: 1, satuan: 'unit' },
      { nama: 'Motor Dinas', jumlah: 9, satuan: 'unit' },
    ],
  },
  {
    kategori: 'Pemerintahan',
    items: [
      { nama: 'Kantor Desa' },
      { nama: 'Gedung Kantor BPD' },
      { nama: 'Gedung PKK' },
      { nama: 'Balai Pertemuan' },
    ],
  },
]

export const mataPencaharian = [
  'Petani Pekebun',
  'Peternak',
  'Pedagang',
  'Buruh Tani',
  'Kontruksi',
  'Pegawai',
]

export const beritaDummy = [
  {
    id: '1',
    slug: 'kegiatan-masyarakat-desa-bajawali-memperkuat-gotong-royong',
    title: 'Kegiatan Masyarakat Desa Bajawali Memperkuat Gotong Royong',
    category: 'Masyarakat',
    date: '12 Mar 2026',
    excerpt:
      'Masyarakat Desa Bajawali kembali mengadakan kegiatan gotong royong rutin untuk membersihkan fasilitas umum dan saluran air menjelang musim penghujan.',
    content:
      'Masyarakat Desa Bajawali kembali mengadakan kegiatan gotong royong rutin untuk membersihkan fasilitas umum dan saluran air menjelang musim penghujan. Kegiatan ini dihadiri oleh warga dari 4 dusun dan dipimpin langsung oleh perangkat desa. Selain menjaga kebersihan, gotong royong ini menjadi wadah silaturahmi antar warga.',
    image:
      'https://images.unsplash.com/photo-1596700810769-cf74a38119eb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'program-pembangunan-desa-bajawali-memasuki-tahap-pelaksanaan',
    title: 'Program Pembangunan Desa Bajawali Memasuki Tahap Pelaksanaan',
    category: 'Pembangunan',
    date: '10 Mar 2026',
    excerpt:
      'Alokasi dana desa tahun ini mulai disalurkan untuk perbaikan jalan lingkungan dan pembangunan fasilitas posyandu di dusun utama.',
    content:
      'Alokasi dana desa tahun ini mulai disalurkan untuk perbaikan jalan lingkungan dan pembangunan fasilitas posyandu di dusun utama. Kepala Desa berharap program ini dapat diselesaikan tepat waktu sesuai target bulan depan.',
    image:
      'https://images.pexels.com/photos/6252573/pexels-photo-6252573.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    slug: 'pelayanan-administrasi-masyarakat-desa-bajawali',
    title: 'Pelayanan Administrasi Masyarakat Desa Bajawali',
    category: 'Pemerintahan',
    date: '5 Mar 2026',
    excerpt:
      'Kantor Desa Bajawali mengumumkan jam pelayanan administrasi kependudukan terbaru untuk memudahkan warga dalam mengurus surat-surat penting.',
    content:
      'Kantor Desa Bajawali mengumumkan jam pelayanan administrasi kependudukan terbaru untuk memudahkan warga dalam mengurus surat-surat penting. Kini pelayanan buka dari Senin hingga Jumat, mulai pukul 08:00 hingga 15:00 WITA.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    slug: 'kegiatan-kkn-tematik-2026-di-desa-bajawali',
    title: 'Kegiatan KKN Tematik 2026 di Desa Bajawali',
    category: 'Pendidikan',
    date: '28 Feb 2026',
    excerpt:
      'Mahasiswa dari Universitas lokal telah menyelesaikan masa pengabdian KKN tematik di Desa Bajawali selama satu bulan penuh.',
    content:
      'Mahasiswa dari Universitas lokal telah menyelesaikan masa pengabdian KKN tematik di Desa Bajawali selama satu bulan penuh. Program utama mereka mencakup pelatihan UMKM dan edukasi pertanian berkelanjutan.',
    image:
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    slug: 'kegiatan-pemuda-desa-bajawali-dalam-pengembangan-potensi',
    title: 'Kegiatan Pemuda Desa Bajawali dalam Pengembangan Potensi Lokal',
    category: 'Pemuda',
    date: '20 Feb 2026',
    excerpt:
      'Karang Taruna Desa Bajawali menggelar diskusi dan pelatihan kewirausahaan untuk menggali potensi produk lokal desa.',
    content:
      'Karang Taruna Desa Bajawali menggelar diskusi dan pelatihan kewirausahaan untuk menggali potensi produk lokal desa. Beberapa produk unggulan mulai dipetakan untuk dibina lebih lanjut.',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
  },
]

export const galeriDummy = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=600&auto=format&fit=crop',
    caption: 'Area persawahan di pagi hari',
    category: 'Potensi Alam',
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/36663384/pexels-photo-36663384.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Lanskap pedesaan',
    category: 'Potensi Alam',
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/6252573/pexels-photo-6252573.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Aktivitas pertanian',
    category: 'Kegiatan Masyarakat',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format&fit=crop',
    caption: 'Diskusi pemuda',
    category: 'Pemuda',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop',
    caption: 'Rapat koordinasi desa',
    category: 'Pemerintahan',
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/3092904/pexels-photo-3092904.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Jalan utama menuju area perkebunan',
    category: 'Potensi Alam',
  },
]
