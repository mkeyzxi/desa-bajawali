# Website Resmi Desa Bajawali

Website Resmi Desa Bajawali, Kecamatan Lariang, Kabupaten Pasangkayu, Provinsi Sulawesi Barat. Proyek ini dibangun sebagai portal informasi digital publik yang modern, responsif, dan SEO-friendly.

Website ini bertujuan untuk mendokumentasikan profil desa, kondisi geografis, demografi, struktur pemerintahan, potensi wilayah, kegiatan masyarakat, dan data statistik, sehingga memudahkan warga, pendatang, mahasiswa, maupun instansi dalam mengakses informasi mengenai Desa Bajawali.

## 🚀 Fitur Utama

- **Profil Desa Lengkap**: Memuat Sejarah, Visi & Misi, Geografi, Demografi, dan Struktur Pemerintahan.
- **Pusat Informasi & Potensi**: Menyoroti potensi desa seperti Pertanian, Perikanan, UMKM, Pariwisata, dan SDA.
- **Berita & Galeri**: Sistem publikasi kegiatan masyarakat, pembangunan, dan pemerintahan desa.
- **Dashboard Statistik (Data Desa)**: Visualisasi data kependudukan (umur, jenis kelamin, pekerjaan) menggunakan Chart.js.
- **Peta Interaktif**: Menampilkan lokasi dan batas (tahap pengembangan) Desa Bajawali dengan integrasi Leaflet.js.
- **SEO & Responsif**: Dibangun dengan prinsip Mobile-First dan arsitektur konten yang ramah Google (Search Engine Optimization).

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Visualisasi Data**: [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Pemetaan**: [Leaflet.js](https://leafletjs.com/) & react-leaflet
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: pnpm

## 📁 Struktur Folder Utama

```text
desa-bajawali/
├── app/               # Rute halaman Next.js (App Router)
│   ├── berita/        # Halaman daftar & detail berita
│   ├── data-desa/     # Halaman visualisasi data statistik
│   ├── galeri/        # Halaman dokumentasi foto
│   ├── kontak/        # Halaman informasi kontak & lokasi
│   ├── potensi/       # Halaman potensi desa (Pertanian, UMKM, dll)
│   ├── profil/        # Halaman profil desa (Sejarah, Visi Misi, Geografis, dll)
│   └── page.tsx       # Landing page (Beranda)
├── components/        # Komponen UI Reusable (Navbar, Footer, Card, UI Elements)
│   ├── charts/        # Komponen pembungkus Chart.js
│   ├── layout/        # Komponen layout utama
│   └── map/           # Komponen pembungkus Leaflet
└── data/              # Sumber data (dummy.ts untuk dummy awal)
```

## 💻 Cara Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal Node.js dan `pnpm` di komputer Anda.

1. **Clone repository ini** (jika belum):
   ```bash
   git clone https://github.com/mkeyzxi/desa-bajawali.git
   cd desa-bajawali
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Jalankan Development Server**:
   ```bash
   pnpm dev
   ```

4. **Buka di Browser**:
   Kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📝 Catatan Data & Konten (Status Proyek)

Saat ini, website berada pada fase penyelesaian UI/UX dan struktur informasi. Sebagian besar data (seperti jumlah penduduk pasti, visi-misi spesifik, nama pejabat desa, dan artikel berita) masih menggunakan **Data Contoh (Dummy Data)**.

Untuk melihat rincian kebutuhan data asli yang perlu dilengkapi oleh pihak desa sebelum diluncurkan sepenuhnya, silakan merujuk pada file `DATA.md` di dalam repositori ini.

---

*Dikembangkan untuk Desa Bajawali, Lariang, Pasangkayu.*
