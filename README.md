# Website Resmi Desa Bajawali

Portal informasi digital resmi **Desa Bajawali, Kecamatan Lariang, Kabupaten Pasangkayu, Provinsi Sulawesi Barat**. Website ini menyajikan profil desa, sejarah, geografi, demografi, struktur pemerintahan, potensi wilayah, berita & kegiatan, galeri dokumentasi, serta statistik desa dalam satu portal yang responsif dan ramah mesin pencari.

Dikembangkan oleh tim Posko Desa Bajawali — Universitas Muhammadiyah Mamuju.

**Status saat ini:** Fase pengembangan antarmuka dan integrasi data selesai. Seluruh rute, navigasi, konten, dan visualisasi data telah berjalan dengan data Profil Desa 2026. Pekerjaan tersisa berada di ranah SEO teknis, interaksi galeri/berita, dan pelengkapan data kontak.

---

## Daftar Isi

- [Fitur yang Sudah Terlaksana](#fitur-yang-sudah-terlaksana)
- [Daftar Halaman](#daftar-halaman)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Sistem Navigasi](#sistem-navigasi)
- [Design System](#design-system)
- [Data & Visualisasi](#data--visualisasi)
- [Peta Lokasi](#peta-lokasi)
- [Struktur Folder](#struktur-folder)
- [Dokumentasi Proyek](#dokumentasi-proyek)
- [Cara Menjalankan Secara Lokal](#cara-menjalankan-secara-lokal)
- [Pekerjaan Berikutnya](#pekerjaan-berikutnya)

---

## Fitur yang Sudah Terlaksana

### 1. Arsitektur Halaman (18 rute)

Seluruh rute wajib pada PRD Fase 1 sudah dibangun dan dapat diakses:

- Landing page / Beranda dengan urutan section: Hero Carousel → Sekilas Desa → Statistik Singkat → Profil Singkat → Potensi Desa → Berita & Kegiatan.
- Enam halaman profil: index, sejarah, moto & program, geografis, demografi, struktur pemerintahan.
- Enam halaman potensi: index, pertanian, perikanan, UMKM, pariwisata, sumber daya alam.
- Daftar berita + detail berita dinamis berbasis `slug` dengan mekanisme `notFound()` untuk slug yang tidak ada.
- Galeri dokumentasi dengan tata letak masonry.
- Dashboard Data Desa dengan kartu KPI dan grafik.
- Halaman Kontak dengan informasi kantor dan peta lokasi.

### 2. Konten Berbasis Data Asli

Konten telah dilengkapi dengan data dari **Profil Desa Bajawali Tahun 2026** (dokumen resmi 27 halaman, dirangkum di `Data_real.md`), bukan lagi placeholder:

| Bagian | Isi yang Sudah Masuk |
|---|---|
| Identitas desa | Luas 7.125,816 Ha, ketinggian 0–500 mdpl, curah hujan 177,5 mm/tahun, suhu 22°C–31°C, moto **BAJAWALIKU JAYA** |
| Kependudukan | 835 jiwa (436 laki-laki / 399 perempuan), 257 KK, 4 dusun, 8 RT |
| Sejarah | Program transmigrasi PIR (26 Des 1991–12 Mar 1993), UPT Baras VII, SK Departemen Transmigrasi No. Ba.61/M/11/1997 (26 Feb 1997), etimologi nama dari kata Sanskerta *JAVA* dan *BALI* |
| Moto & Program | Moto desa + 5 bidang kerja pemerintahan (Pemerintahan, Pembangunan, Kemasyarakatan, Pemberdayaan Masyarakat, Penanggulangan Bencana) |
| Struktur pemerintahan | Kepala Desa, 7 perangkat desa, 4 kepala dusun, 5 pengurus BPD — lengkap dengan nama dan referensi SK No. 01 Tahun 2025 |
| Batas wilayah | Utara Desa Parabu; Timur Desa Karave (Kec. Bulutaba); Selatan HGU PT Unggul Widya Tek; Barat Desa Singgani |
| Lembaga & sarana | Gapoktan, BUMDesa, 10 kelompok tani, 1 kelompok ternak; sarana kesehatan, peribadatan, olahraga, kesenian, transportasi, pemerintahan |
| Berita | 3 artikel kegiatan asli (hibah motor, BPJS Ketenagakerjaan, sosialisasi STD-B) sesuai `BERITA.md` |
| Galeri | 13 foto dokumentasi kegiatan asli dengan caption dan kategori |

### 3. Navigasi Desktop & Mobile

Implementasi mengikuti spesifikasi perombakan navigasi di `NewNav.md`:

**Desktop (`Navbar.tsx`)**

- Menyatu dengan Hero Section saat `scrollY = 0` (transparan), berubah menjadi sticky bar dengan `backdrop-blur` dan border tipis setelah scroll > 20px, tanpa layout jumping.
- Active state jelas (underline + perubahan warna) berdasarkan `pathname`, termasuk untuk nested route (`/profil/sejarah` tetap mengaktifkan menu Profil).
- Dropdown sub-menu Profil Desa (5 item) dan Potensi Desa (5 item) dengan transisi halus.
- Ukuran teks menu, padding, dan spacing diperbesar agar nyaman diklik.

**Mobile (`BottomNav.tsx`)**

- Bottom navigation ala aplikasi Android dengan 4 item utama: **Beranda** (Home), **Profil** (Landmark), **Berita** (Newspaper), **Lainnya** (MoreHorizontal) — seluruh ikon dari Lucide React, tanpa emoji.
- Menu "Lainnya" membuka drawer berisi Potensi, Galeri, Data Desa, dan Kontak, lengkap dengan titik indikator jika submenu di dalamnya sedang aktif.
- Perilaku mengikuti scroll: terlihat saat berada di paling atas, menghilang saat scroll ke bawah, muncul kembali saat scroll ke atas — memakai *passive* event listener dan animasi `transform` (bukan properti layout).
- Mendukung *safe area* perangkat (`env(safe-area-inset-bottom)`), dan `main` diberi padding bawah 72px agar tidak menutupi konten.
- Menu ditutup otomatis saat rute berubah atau overlay diklik.
- Desktop dan mobile navigation tidak aktif bersamaan (`hidden md:block` / `md:hidden`).

### 4. Hero Carousel Beranda

- 3 slide dengan foto latar lokal (`public/gambar/background/*.webp`), overlay dua lapis agar teks tetap terbaca, autoplay tiap 6 detik, indikator slide yang dapat diklik, dan prioritas pemuatan pada slide pertama (LCP).
- Judul H1 tunggal "Selamat Datang di Website Desa Bajawali" plus CTA ke `/profil` dan `/data-desa`.

### 5. Design System

Diterapkan dari `design.md` ke `app/globals.css`:

- Arah visual **Civic Editorial / Rural Modern**: grid 12 kolom, border 1px sebagai struktur utama, radius kecil (6–10px), bayangan sangat ringan, tanpa gradient dekoratif, glassmorphism, atau kartu bulat berlebihan.
- Palet warna token: Forest Green (`#087653` dan varian), Paper (`#FCFBF7`, `#F6F3EA`, `#EAE5D8`), Ink (`#17201C`–`#8A938D`), plus aksen `clay`, `sun`, `blue-map`, `red-alert` — semua terpasang sebagai utility Tailwind v4 lewat blok `@theme`.
- Tipografi ganda: **Source Serif 4** untuk heading/editorial (`font-editorial`) dan **Manrope** untuk UI/teks isi, dimuat lewat `next/font/google`.
- Aturan anti-template: nomor section editorial (`01 / TENTANG BAJAWALI`), statistik sebagai rail horizontal (bukan kartu ikon), layout profil asimetris 7/5–5/7, komposisi mosaik untuk potensi.

### 6. Visualisasi Data (Chart.js)

Enam grafik di `/data-desa`, seluruhnya bertema design token (warna hijau/clay/sun/blue-map, font Manrope, tooltip paper, grid tipis):

| Grafik | Tipe | Sumber Data |
|---|---|---|
| Kelompok Umur Penduduk | Horizontal bar | Profil Desa 2026 (119/143/346/102/52) |
| Kepercayaan & Agama | Doughnut | Islam 146, Hindu 586, Kristen 7, Katholik 24 |
| Komposisi Suku | Doughnut | Bali 585, Bugis 59, Jawa 75, Tator 34, Mandar 3 |
| Status Pernikahan | Doughnut | Kawin 419, Belum Kawin 319 |
| Distribusi Wilayah per Dusun | Bar | Kerta 164, Makmur 350, Lestari 174, Mandiri 77 |
| Lembaga Perekonomian | Doughnut | Gapoktan, BUMDesa, Kelompok Tani, Kelompok Ternak |

Semua komponen chart dimuat dinamis (`next/dynamic` dengan `ssr: false`) sehingga tidak membebani rendering server.

### 7. Peta Lokasi

- Halaman **Geografis** dan **Kontak** menampilkan peta Desa Bajawali melalui *embed* Google Maps (iframe, `loading="lazy"`) dengan URL embed resmi hasil pencarian lokasi desa.
- Halaman geografis menampilkan kartu koordinat referensi `-1.4904673, 119.3656846`.
- Terdapat komponen `components/map/Map.tsx` + `MapWrapper.tsx` (dynamic import) siap pakai berbasis koordinat.
- Tidak ada polygon batas desa yang digambar — mengikuti aturan PRD: batas administratif menunggu data spasial (GeoJSON) yang tervalidasi.

### 8. Footer, Ikon & Aset

- Footer 4 kolom: identitas desa + logo, navigasi Profil, navigasi Informasi, dan Kontak; disertai catatan kredit Universitas Muhammadiyah Mamuju (Posko Desa Bajawali) serta tautan developer.
- Ikon situs tersedia: `favicon.ico`, `icon.png`, `apple-icon.png` di folder `app/`.
- Aset foto lokal: 3 latar hero, 13 foto galeri, foto Kepala Desa, logo Kabupaten Pasangkayu (format `.webp`/`.png`).

### 9. Konfigurasi Teknis

- **Next.js App Router** dengan React Server Component sebagai default; komponen interaktif (navbar, bottom nav, carousel, chart, peta) bertanda `'use client'` seperlunya.
- `next.config.ts`: `images.remotePatterns` untuk `images.unsplash.com` dan `images.pexels.com` (foto sementara pada halaman potensi).
- `tsconfig.json`: alias path `@/*`, `strict: true`.
- ESLint: `eslint-config-next` (core-web-vitals + TypeScript).
- Script: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`.
- `lang="id"` pada elemen `<html>` dan metadata global (judul + deskripsi + ikon).

---

## Daftar Halaman

| URL | Halaman | Status |
|---|---|---|
| `/` | Beranda (hero, sekilas, statistik, profil, potensi, berita) | Selesai |
| `/profil` | Index Profil Desa | Selesai |
| `/profil/sejarah` | Sejarah Desa (artikel naratif) | Selesai |
| `/profil/visi-misi` | Moto & Program Desa | Selesai |
| `/profil/geografis` | Kondisi Geografis + peta + batas wilayah | Selesai |
| `/profil/demografi` | Demografi & Kependudukan | Selesai |
| `/profil/struktur-pemerintahan` | Struktur Pemerintahan, Kadus & BPD | Selesai |
| `/potensi` | Index Potensi Desa | Selesai |
| `/potensi/pertanian` | Pertanian & Perkebunan | Selesai |
| `/potensi/perikanan` | Perikanan | Selesai |
| `/potensi/umkm` | UMKM & Ekonomi Desa | Selesai |
| `/potensi/pariwisata` | Pariwisata & Budaya | Selesai |
| `/potensi/sumber-daya-alam` | Sumber Daya Alam | Selesai |
| `/berita` | Daftar Berita & Kegiatan | Selesai |
| `/berita/[slug]` | Detail Berita + berita terkait | Selesai |
| `/galeri` | Galeri Dokumentasi (masonry) | Selesai |
| `/data-desa` | Data & Statistik + 6 grafik | Selesai |
| `/kontak` | Kontak & Lokasi + peta | Selesai |

---

## Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **UI Library**: React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/postcss`, token di `@theme`)
- **Visualisasi Data**: [Chart.js](https://www.chartjs.org/) 4 + [react-chartjs-2](https://react-chartjs-2.js.org/) 5
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Font**: Source Serif 4 & Manrope (`next/font/google`)
- **Package Manager**: pnpm

> Catatan: `leaflet` dan `react-leaflet` terpasang di `package.json` tetapi **belum digunakan** — implementasi peta saat ini memakai embed Google Maps.

---

## Design System

| Elemen | Nilai |
|---|---|
| Primary | Forest Green `#087653` (dark `#075234`, accent `#0B8A63`) |
| Background | Paper `#FCFBF7` / alternatif `#F6F3EA` / border `#EAE5D8` |
| Teks | Ink `#17201C` (heading), `#2A3530` (isi), `#5A665F` (muted) |
| Aksen | `clay #B56B45`, `sun #C99A31`, `blue-map #4D7892` |
| Display font | Source Serif 4 (heading & angka editorial) |
| UI font | Manrope (navigasi, isi, label, chart) |
| Radius | 4–10px (tidak melebihi 10px) |
| Shadow | Sangat ringan, hanya untuk overlay/dropdown |
| Grid | Desktop 12 kolom · Tablet 8 · Mobile 4 |

---

## Data & Visualisasi

- Seluruh data desa dikelola terpusat di **`data/dummy.ts`** (desaInfo, batasWilayah, lembagaPerekonomian, saranaDesa, mataPencaharian, beritaDummy, galeriDummy).
- Meskipun namanya masih `dummy`, isinya sebagian besar adalah **data nyata hasil ekstraksi Profil Desa Bajawali 2026** — pemisahan/penamaan ulang modul data menjadi langkah berikutnya sebelum migrasi ke database/CMS.
- Setiap angka statistik pada halaman Data Desa diberi keterangan sumber dan tahun ("Profil Desa 2026").

---

## Peta Lokasi

- Titik pusat: `-1.4904673, 119.3656846` (referensi Google Maps).
- Halaman `geografis` dan `kontak` menampilkan iframe Google Maps yang sama dengan URL embed resmi.
- Tombol "Buka di Google Maps" pada halaman kontak mengarah ke lokasi desa.
- Polygon batas desa sengaja tidak digambar sebelum tersedia GeoJSON resmi.

---

## Struktur Folder

```text
desa-bajawali/
├── app/                        # Rute App Router + metadata
│   ├── layout.tsx              # Root layout: font, Navbar, Footer, BottomNav, metadata global
│   ├── page.tsx                # Beranda
│   ├── globals.css             # Design token + konfigurasi Tailwind v4
│   ├── favicon.ico / icon.png / apple-icon.png
│   ├── berita/
│   │   ├── page.tsx            # Daftar berita
│   │   └── [slug]/page.tsx     # Detail berita (dynamic, notFound)
│   ├── data-desa/page.tsx      # Statistik desa + 6 grafik
│   ├── galeri/page.tsx         # Galeri masonry
│   ├── kontak/page.tsx         # Kontak + embed peta
│   ├── potensi/
│   │   ├── page.tsx
│   │   ├── pertanian/ perikanan/ umkm/ pariwisata/ sumber-daya-alam/
│   └── profil/
│       ├── page.tsx
│       ├── sejarah/ visi-misi/ geografis/ demografi/ struktur-pemerintahan/
├── components/
│   ├── layout/                 # Navbar, BottomNav, Footer, HeroCarousel
│   ├── charts/                 # Charts.tsx (6 grafik) + ChartsWrapper (dynamic import)
│   └── map/                    # Map.tsx (Google Maps embed) + MapWrapper
├── data/
│   └── dummy.ts                # Sumber data terpusat
├── public/
│   └── gambar/
│       ├── background/         # 3 foto latar hero
│       ├── galeri/             # 13 foto dokumentasi
│       ├── struktur/           # Foto kepala desa + bagan struktur
│       └── logo_pasangkayu.png
├── next.config.ts              # Konfigurasi remote image patterns
├── PRD.md                      # Product Requirements Document
├── design.md                   # Design system & spesifikasi UI/UX
├── NewNav.md                   # Spesifikasi perombakan navigasi
├── Data_real.md                # Rangkuman data asli Profil Desa 2026
├── DATA.md                     # Daftar kebutuhan data (sebagian sudah terpenuhi)
├── BERITA.md                   # Naskah berita sumber
├── eval.md / SKILL.md          # Pedoman penyuntingan tulisan
└── AGENTS.md / CLAUDE.md       # Instruksi agen AI
```

---

## Dokumentasi Proyek

| File | Peran |
|---|---|
| `PRD.md` | Kebutuhan produk: scope, sitemap, kriteria penerimaan, roadmap, data governance |
| `design.md` | Design system: warna, tipografi, grid, aturan anti-AI-slop, spesifikasi per halaman |
| `NewNav.md` | Spesifikasi navigasi desktop & bottom-nav mobile beserta acceptance criteria |
| `Data_real.md` | Rangkuman data asli dari PDF Profil Desa Bajawali 2026 (sumber utama konten) |
| `DATA.md` | Daftar data yang masih dibutuhkan (sebagian besar sudah terpenuhi; sebagian catatannya telah usang) |
| `BERITA.md` | Naskah 3 berita kegiatan desa yang sudah dimasukkan ke website |
| `eval.md` / `SKILL.md` | Aturan penyuntingan tulisan bebas pola AI |

---

## Cara Menjalankan Secara Lokal

Pastikan Node.js dan `pnpm` sudah terpasang.

1. **Clone repository** (jika belum):

   ```bash
   git clone https://github.com/mkeyzxi/desa-bajawali.git
   cd desa-bajawali
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Jalankan development server**:

   ```bash
   pnpm dev
   ```

4. **Buka di browser**: [http://localhost:3000](http://localhost:3000).

Perintah lain: `pnpm build` (build produksi), `pnpm start` (jalankan build), `pnpm lint` (ESLint).

---

## Pekerjaan Berikutnya

Bagian ini belum dikerjakan dan menjadi target tahap selanjutnya:

**SEO teknis (belum ada sama sekali)**

- `app/sitemap.ts` dan `robots.ts`.
- `metadataBase`, canonical, Open Graph, dan Twitter Card per halaman.
- `generateMetadata` dinamis untuk detail berita (judul/deskripsi unik per slug).
- Structured data JSON-LD (`WebSite`, `BreadcrumbList`, `NewsArticle`).
- Komponen breadcrumb reusable (saat ini baru teks manual di beberapa halaman).

**Interaksi halaman**

- Lightbox galeri (klik foto, navigasi prev/next, tutup dengan Escape) dan filter kategori yang berfungsi — tombol filter galeri saat ini masih tampilan saja.
- Filter kategori berita dan grafik berita (tren per bulan + distribusi kategori) sesuai PRD bagian 15.
- Halaman 404 kustom, loading, dan error state.
- Tombol "Salin Alamat" pada kontak belum berfungsi (belum ada handler).

**Data & aset**

- Nomor telepon dan email kantor desa belum tersedia (menunggu data resmi).
- Foto potensi masih memakai stok Unsplash/Pexels; perlu diganti foto asli desa.
- Dua gambar struktur (`Struktur_Pemerintah_Desa_Bajawali`, `Struktur_BPD_Bajawali`) sudah ada di `public/` tetapi belum dipasang di halaman struktur pemerintahan.
- Pemasangan Leaflet + GeoJSON untuk polygon batas desa (dependency sudah terpasang).
- Penamaan/pemisahan `data/dummy.ts` karena isinya kini mayoritas data nyata.
- Pencarian internal `/search` (opsional sesuai PRD).

**Operasional**

- Pencatatan nomor/statistik berita, analytics, pendaftaran Google Search Console, uji Lighthouse, dan deployment produksi belum dilakukan.

---

*Dikembangkan untuk Desa Bajawali, Lariang, Pasangkayu — oleh Universitas Muhammadiyah Mamuju, Posko Desa Bajawali.*
