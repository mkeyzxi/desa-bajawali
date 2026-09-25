# Website Resmi Desa Bajawali

Portal informasi digital resmi **Desa Bajawali, Kecamatan Lariang, Kabupaten Pasangkayu, Provinsi Sulawesi Barat**. Website ini menyajikan profil desa, sejarah, geografi, demografi, struktur pemerintahan, kepala desa dan perangkat desa, potensi wilayah, berita & kegiatan, galeri dokumentasi, data statistik, dan kontak desa dalam satu portal yang responsif.

Dikembangkan oleh tim Posko Desa Bajawali — Universitas Muhammadiyah Mamuju.

**Status saat ini:** antarmuka publik, halaman profil, data dummy/terpusat, admin Supabase, visualisasi data, galeri, modal gambar struktur, animasi scroll GSAP, dan integrasi kontak sudah berjalan. Data statistik utama dan konten publik bersumber dari Profil Desa Bajawali 2026. Beberapa pekerjaan produksi masih tersisa di bagian [Pekerjaan Berikutnya](#pekerjaan-berikutnya).

---

## Daftar Isi

- [Ringkasan Proyek](#ringkasan-proyek)
- [Fitur yang Sudah Terlaksana](#fitur-yang-sudah-terlaksana)
- [Daftar Halaman](#daftar-halaman)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Sistem Navigasi](#sistem-navigasi)
- [Design System](#design-system)
- [Data & Visualisasi](#data--visualisasi)
- [Peta Lokasi](#peta-lokasi)
- [Kontak Desa](#kontak-desa)
- [Animasi & Interaksi](#animasi--interaksi)
- [Aset Gambar](#aset-gambar)
- [Struktur Folder](#struktur-folder)
- [Dokumentasi Proyek](#dokumentasi-proyek)
- [Cara Menjalankan Secara Lokal](#cara-menjalankan-secara-lokal)
- [Konfigurasi Supabase](#konfigurasi-supabase)
- [Validasi](#validasi)
- [Pekerjaan Berikutnya](#pekerjaan-berikutnya)

---

## Ringkasan Proyek

| Item | Keterangan |
|---|---|
| Nama aplikasi | Website Resmi Desa Bajawali |
| Lokasi | Kecamatan Lariang, Kabupaten Pasangkayu, Sulawesi Barat |
| Head desa | Ketut Langga, S.Ag |
| Moto desa | BAJAWALIKU JAYA |
| Tahun data utama | 2026 |
| Framework | Next.js 16 App Router + React 19 + TypeScript 5 |
| Styling | Tailwind CSS v4 dengan design token sendiri |
| Data publik | `data/dummy.ts` sebagai sumber lokal terpusat |
| Data news/gallery | Jalur Supabase tersedia dan dikonfigurasi melalui `lib/data-source.ts` |
| Package manager | pnpm 11.8.0 |
| Bahasa antarmuka | Bahasa Indonesia (`lang="id"`) |

---

## Fitur yang Sudah Terlaksana

### 1. Arsitektur Halaman Publik (18 rute publik)

Seluruh rute publik utama sudah dibangun dan dapat diakses:

- **Beranda** dengan urutan modul:
  1. Hero Carousel
  2. Sambutan Kepala Desa
  3. `01 / Tentang Bajawali`
  4. Statistik Singkat
  5. `02 / Profil Singkat`
  6. `03 / Struktur Pemerintahan` dan BPD
  7. `04 / Perangkat Desa`
  8. `05 / Potensi Desa`
  9. `06 / Berita & Kegiatan`
  10. `07 / Galeri Dokumentasi`
  11. `08 / Informasi Desa` — Data dan Kontak
- **Enam halaman profil:** index, sejarah, moto & program, geografis, demografi, dan struktur pemerintahan.
- **Enam halaman potensi:** index, pertanian, perikanan, UMKM, pariwisata, dan sumber daya alam.
- **Daftar berita dan detail berita dinamis** berbasis `slug`, dengan `notFound()` untuk slug yang tidak ditemukan.
- **Galeri dokumentasi** dengan filter kategori dan preview lima foto terbaru di beranda.
- **Data Desa** dengan KPI, tabel, dan enam visualisasi Chart.js.
- **Kontak dan Lokasi** dengan alamat, jam pelayanan, email, WhatsApp, dan peta Google Maps.

### 2. Konten Berbasis Data Asli

Konten telah dilengkapi dengan data dari **Profil Desa Bajawali Tahun 2026** (dokumen resmi 27 halaman, dirangkum di `Data_real.md`) dan naskah kegiatan pada `BERITA.md`:

| Bagian | Isi yang sudah masuk |
|---|---|
| Identitas desa | Luas 7.125,816 Ha, ketinggian 0–500 mdpl, curah hujan 177,5 mm/tahun, suhu 22°C–31°C, moto **BAJAWALIKU JAYA** |
| Kependudukan | 835 jiwa (436 laki-laki / 399 perempuan), 257 KK, 4 dusun, 8 RT |
| Sejarah | Program transmigrasi PIR, UPT Baras VII, SK Departemen Transmigrasi No. Ba.61/M/11/1997, dan asal kata Sanskerta *JAVA* serta *BALI* |
| Moto & Program | Moto desa dan lima bidang kerja pemerintahan |
| Struktur pemerintahan | Kepala Desa, perangkat desa, kepala dusun, dan pengurus BPD dengan referensi SK No. 01 Tahun 2025 |
| Batas wilayah | Utara Desa Parabu; Timur Desa Karave; Selatan HGU PT Unggul Widya Tek; Barat Desa Singgani |
| Lembaga & sarana | Gapoktan, BUMDesa, kelompok tani, kelompok ternak, sarana kesehatan, peribadatan, olahraga, kesenian, transportasi, dan pemerintahan |
| Berita | Tiga kegiatan: hibah motor, BPJS Ketenagakerjaan, dan sosialisasi STD-B |
| Galeri | 13 foto dokumentasi asli dengan caption dan kategori |

### 3. Beranda: Sambutan Kepala Desa

- Card sambutan ditempatkan setelah Hero Carousel dan sebelum `01 / Tentang Bajawali`.
- Menampilkan foto Kepala Desa, nama, jabatan, pesan sambutan, dan tautan ke `/profil/struktur-pemerintahan`.
- Di mobile, foto memakai rasio vertikal dan `object-contain` agar gambar tidak terpotong.
- Di desktop, layout foto dan teks tetap ringkas agar card tidak terlalu tinggi.

### 4. Beranda: Tentang Bajawali dan Statistik

- `01 / Tentang Bajawali` menampilkan deskripsi wilayah, sejarah singkat, dan informasi luas wilayah/kecamatan/kabupaten.
- Informasi wilayah disusun rata kiri dengan icon lokal besar tanpa background card.
- Statistik `Penduduk`, `Kepala Keluarga`, `Dusun`, dan `RT` memakai icon transparan berukuran besar sebagai ornament/watermark.
- Angka tetap menjadi elemen utama dan tetap memiliki layout rail yang responsif.

### 5. Beranda: Profil Singkat

- `02 / Profil Singkat` menyediakan card cepat untuk:
  - Sejarah Desa
  - Geografis
  - Demografi
  - Pemerintahan
- Setiap card memiliki icon lokal, deskripsi ringkas, dan link ke halaman profil.
- Card profil mengikuti layout editorial asimetris dan tidak menggunakan template card identik.

### 6. Struktur Pemerintahan dan BPD

- `03 / Struktur Pemerintahan` menampilkan dua diagram lokal:
  - Struktur Pemerintah Desa Bajawali
  - Struktur BPD Bajawali
- Kedua gambar dapat diklik untuk dibuka dalam modal/lightbox.
- `components/gallery/StructureImageLightbox.tsx` menyediakan:
  - Tampilan gambar besar dengan `object-contain`
  - Tombol tutup
  - Klik backdrop untuk menutup
  - Navigasi gambar sebelumnya/berikutnya
  - Keyboard `Escape`, `ArrowLeft`, dan `ArrowRight`
  - Scroll lock saat modal terbuka
- `04 / Perangkat Desa` menampilkan preview Kepala Desa dan perangkat desa dengan foto, jabatan, nama, fallback inisial, dan link ke profil struktur.

### 7. Potensi Desa

- `05 / Potensi Desa` menggunakan komposisi mosaic asimetris.
- Modul yang tersedia:
  - Pertanian
  - UMKM
  - Pariwisata
  - Sumber Daya Alam
- Foto potensi masih menggunakan aset sementara Unsplash/Pexels dan dapat diganti dengan foto resmi desa.

### 8. Berita & Kegiatan

- `06 / Berita & Kegiatan` menampilkan satu feature news dan daftar berita sekunder.
- Link homepage, daftar berita, detail berita, dan berita terkait menggunakan slug yang sama dari `data/dummy.ts`.
- Slug yang saat ini digunakan:
  - `penyerahan-hibah-motor-kepada-umat-hindu-dan-umat-islam`
  - `penyerahan-bpjs-ketenagakerjaan-kepada-pegawainsara`
  - `sosialisasi-surat-tanda-daftar-budidaya-std-b`
- Halaman detail berita memiliki breadcrumb manual, metadata, gambar utama, isi berita, dan berita terkait.

### 9. Galeri Dokumentasi

- `07 / Galeri Dokumentasi` di beranda menampilkan lima foto terbaru dari `galeriDummy`.
- Layout mobile menggunakan satu kolom agar foto dan kategori seperti `Kegiatan Masyarakat` tetap terbaca.
- Layout desktop menggunakan satu foto besar dan beberapa foto pendukung.
- Halaman `/galeri` memiliki filter kategori yang benar-benar memfilter daftar foto.
- Galeri dapat menggunakan sumber lokal atau Supabase sesuai konfigurasi `DATA_SOURCE`.

### 10. Data dan Kontak di Beranda

- `08 / Informasi Desa` berisi dua card utama:
  - **Data & Statistik Desa** → `/data-desa`
  - **Kontak & Lokasi** → `/kontak`
- Card data menampilkan ringkasan penduduk, dusun, dan RT.
- Card kontak menampilkan alamat, jam pelayanan, email, dan WhatsApp.
- Email dan WhatsApp dapat diklik langsung.

### 11. Admin dan Content Management

- Login admin tersedia di `/admin/login`.
- Route `/admin/*` dilindungi oleh `proxy.ts` dan session Supabase.
- Role yang diizinkan: `owner`, `developer`, dan `administrator`.
- Dashboard admin menyediakan:
  - Ringkasan data
  - Manajemen profil
  - Manajemen pengguna
  - Manajemen berita dengan Tiptap
  - Manajemen galeri
  - Upload dan optimasi gambar
- Data news dan gallery dapat dibaca dari Supabase, sedangkan data profil/demografi/infrastruktur tetap memakai data lokal.

### 12. GSAP Scroll Animation

- `components/animations/HomeScrollEffects.tsx` menggunakan GSAP + ScrollTrigger.
- Animasi diterapkan pada section homepage saat masuk viewport:
  - Fade-in
  - Gerak vertikal halus
  - Stagger pada konten di dalam section
- Animasi hanya dijalankan satu kali per section.
- `prefers-reduced-motion` dihormati agar aksesibilitas tetap baik.
- Halaman utama tetap Server Component; hanya komponen animasi yang menjadi Client Component.

### 13. Design System dan Icon

- Arah visual: **Civic Editorial / Rural Modern**.
- Warna, typography, border, radius, dan shadow mengikuti `design.md` dan `app/globals.css`.
- Icon aplikasi lokal tersedia di `public/gambar/icon/`.
- Icon digunakan secara selektif sebagai ornament section, aksen card, dan petunjuk informasi agar homepage tidak monoton.
- Sumber icon lokal yang tersedia antara lain:
  - `kantor_desa.webp`
  - `data_penduduk.webp`
  - `keluarga.webp`
  - `dusun_wilayah.webp`
  - `batas_wilayah.webp`
  - `dokumen.webp`
  - `potensi_desa.webp`
  - `jadwal_kegiatan.webp`
  - `galeri_dokumentasi.webp`
  - `statistik.webp`
  - `lokasi.webp`

### 14. Footer, Ikon, dan Aset

- Footer empat kolom memuat identitas desa, navigasi profil, informasi, kontak, kredit Posko Desa Bajawali, dan tautan developer.
- Ikon situs tersedia di `app/favicon.ico`, `app/icon.png`, dan `app/apple-icon.png`.
- Aset lokal mencakup 3 background hero, 13 foto galeri, foto kepala desa/perangkat, dua diagram struktur, logo Kabupaten Pasangkayu, dan sekumpulan icon transparent.

### 15. Konfigurasi Teknis

- **Next.js App Router** dengan React Server Component sebagai default.
- Komponen interaktif menggunakan `'use client'` seperlunya.
- `next.config.ts` mengizinkan remote image dari Unsplash, Pexels, dan Supabase.
- `tsconfig.json` menggunakan alias `@/*` dan strict mode.
- ESLint menggunakan `eslint-config-next` core web vitals + TypeScript.
- Script tersedia:
  - `pnpm dev`
  - `pnpm build`
  - `pnpm start`
  - `pnpm lint`

---

## Daftar Halaman

### Halaman Publik

| URL | Halaman | Status |
|---|---|---|
| `/` | Beranda lengkap: hero, sambutan, profil, statistik, struktur, perangkat, potensi, berita, galeri, data, kontak | Selesai |
| `/profil` | Index Profil Desa | Selesai |
| `/profil/sejarah` | Sejarah Desa | Selesai |
| `/profil/visi-misi` | Moto & Program Desa | Selesai |
| `/profil/geografis` | Geografis, batas wilayah, dan peta | Selesai |
| `/profil/demografi` | Demografi dan kependudukan | Selesai |
| `/profil/struktur-pemerintahan` | Struktur pemerintahan, kepala desa, perangkat, dusun, BPD | Selesai |
| `/potensi` | Index Potensi Desa | Selesai |
| `/potensi/pertanian` | Pertanian dan perkebunan | Selesai |
| `/potensi/perikanan` | Perikanan | Selesai |
| `/potensi/umkm` | UMKM dan ekonomi desa | Selesai |
| `/potensi/pariwisata` | Pariwisata dan budaya | Selesai |
| `/potensi/sumber-daya-alam` | Sumber daya alam | Selesai |
| `/berita` | Daftar berita dan kegiatan | Selesai |
| `/berita/[slug]` | Detail berita dan berita terkait | Selesai |
| `/galeri` | Galeri dokumentasi dan filter kategori | Selesai |
| `/data-desa` | Data, statistik, dan enam grafik | Selesai |
| `/kontak` | Kontak, lokasi, email, WhatsApp, dan peta | Selesai |

### Halaman Admin

| URL | Fungsi | Status |
|---|---|---|
| `/admin/login` | Login admin Supabase | Selesai |
| `/admin` | Dashboard admin | Selesai |
| `/admin/profil` | Manajemen profil | Selesai |
| `/admin/pengguna` | Manajemen pengguna | Selesai |
| `/admin/data-desa` | Data dan statistik admin | Selesai |
| `/admin/berita` | Daftar berita | Selesai |
| `/admin/berita/tambah` | Tambah berita | Selesai |
| `/admin/berita/[id]/edit` | Edit berita | Selesai |
| `/admin/galeri` | Daftar galeri | Selesai |
| `/admin/galeri/tambah` | Tambah galeri | Selesai |
| `/admin/galeri/[id]/edit` | Edit galeri | Selesai |

---

## Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) 16 App Router
- **Language:** TypeScript 5 dengan strict mode
- **UI:** React 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) melalui `@tailwindcss/postcss`
- **Visualisasi:** [Chart.js](https://www.chartjs.org/) 4 + `react-chartjs-2`
- **Animasi:** [GSAP](https://gsap.com/) 3 + ScrollTrigger
- **Ikon UI:** [Lucide React](https://lucide.dev/)
- **Rich text:** Tiptap (`@tiptap/react`, `@tiptap/starter-kit`)
- **Backend/Auth:** Supabase SSR + Supabase JS
- **Font:** Source Serif 4 + Manrope melalui `next/font/google`
- **Package manager:** pnpm 11.8.0

> `leaflet` dan `react-leaflet` masih terpasang di `package.json`, tetapi implementasi peta yang aktif menggunakan iframe Google Maps.

---

## Sistem Navigasi

Implementasi mengikuti spesifikasi navigasi di `NewNav.md`.

### Desktop (`components/layout/Navbar.tsx`)

- Navbar menyatu dengan hero pada posisi teratas.
- Setelah scroll, navbar menjadi sticky dengan border tipis dan efek backdrop.
- Active state menggunakan underline dan perubahan warna.
- Dropdown Profil Desa dan Potensi Desa memiliki submenu.
- Navigasi tetap kompatibel dengan route profil dan potensi bersarang.

### Mobile (`components/layout/BottomNav.tsx`)

- Bottom navigation dengan empat menu utama: Beranda, Profil, Berita, dan Lainnya.
- Menu Lainnya berisi Potensi, Galeri, Data Desa, dan Kontak.
- Bottom nav mengikuti arah scroll dan aman untuk perangkat dengan safe area.
- `main` memiliki padding bawah mobile agar konten tidak tertutup bottom navigation.
- Desktop dan mobile navigation tidak aktif bersamaan.

### Client Components

- `HeroCarousel.tsx`
- `BottomNav.tsx`
- `GalleryFilter.tsx`
- `StructureImageLightbox.tsx`
- `HomeScrollEffects.tsx`
- `MapWrapper.tsx` dan `Map.tsx`
- Komponen chart wrapper

---

## Design System

| Elemen | Nilai |
|---|---|
| Primary | Forest Green `#087653` |
| Dark primary | `#075234` |
| Accent | `#0B8A63` |
| Background | Paper `#FCFBF7` / alternatif `#F6F3EA` |
| Border | `#EAE5D8` |
| Heading | Ink `#17201C` |
| Body | `#2A3530` |
| Muted text | `#5A665F` dan `#8A938D` |
| Display font | Source Serif 4 |
| UI font | Manrope |
| Radius | 4–10px |
| Grid | Desktop 12 kolom, tablet 8, mobile 4 |

Prinsip visual yang dipertahankan:

- Border tipis sebagai struktur utama.
- Tipografi editorial untuk heading dan angka.
- Card tidak semuanya identik.
- Tanpa gradient dekoratif, glassmorphism, atau emoji sebagai icon system.
- Spacing konsisten dan responsif.
- Icon lokal digunakan sebagai aksen, bukan sebagai elemen yang menutupi konten.

---

## Data & Visualisasi

- Data publik terpusat di **`data/dummy.ts`**.
- Data tersebut berisi:
  - `desaInfo`
  - `batasWilayah`
  - `lembagaPerekonomian`
  - `saranaDesa`
  - `mataPencaharian`
  - `beritaDummy`
  - `galeriDummy`
- Nilai data sudah menggunakan profil desa 2026, meskipun nama file masih `dummy`.
- Konfigurasi sumber data berada di `lib/data-source.ts`:
  - News: Supabase
  - Gallery: Supabase
  - Profile: local
  - Demographic: local
  - Infrastructure: local
- Homepage saat ini mengambil data ringkasan dari `data/dummy.ts`.
- Halaman berita dan galeri dapat beralih ke Supabase melalui `isSupabaseSource()`.
- Slug berita yang aktif:
  - `penyerahan-hibah-motor-kepada-umat-hindu-dan-umat-islam`
  - `penyerahan-bpjs-ketenagakerjaan-kepada-pegawainsara`
  - `sosialisasi-surat-tanda-daftar-budidaya-std-b`

### Enam grafik Data Desa

| Grafik | Tipe |
|---|---|
| Kelompok Umur Penduduk | Horizontal bar |
| Kepercayaan & Agama | Doughnut |
| Komposisi Suku | Doughnut |
| Status Pernikahan | Doughnut |
| Distribusi Wilayah per Dusun | Bar |
| Lembaga Perekonomian | Doughnut |

Chart dimuat melalui wrapper dinamis agar tidak memperlambat rendering server.

---

## Peta Lokasi

- Halaman geografis dan kontak menampilkan iframe Google Maps.
- `components/map/Map.tsx` dan `MapWrapper.tsx` tersedia sebagai wrapper peta.
- Titik referensi: `-1.4904673, 119.3656846`.
- Halaman kontak memiliki tombol **Buka di Google Maps**.
- Polygon batas desa belum digambar karena membutuhkan GeoJSON yang tervalidasi.

---

## Kontak Desa

Informasi kontak desa yang ditampilkan di homepage dan halaman `/kontak`:

| Label | Nilai | Link |
|---|---|---|
| Email | `desabajawali2@gmail.com` | `mailto:desabajawali2@gmail.com` |
| WhatsApp | `+62 857-5606-3460` | `https://wa.me/+6285756063460` |
| Alamat | Kantor Desa Bajawali, Kec. Lariang, Kab. Pasangkayu, Sulawesi Barat | Google Maps |
| Jam pelayanan | Senin–Jumat, 08.00–15.00 WITA | — |

Informasi kontak ditambahkan pada:

- Card Kontak & Lokasi di `app/page.tsx`
- Daftar Kantor Desa di `app/kontak/page.tsx`

---

## Animasi & Interaksi

### GSAP Scroll

- Dependency: `gsap`.
- Komponen: `components/animations/HomeScrollEffects.tsx`.
- Target: section langsung di bawah wrapper halaman (`main > div > section`).
- Efek:
  - Fade-in
  - Reveal dari bawah
  - Stagger konten
- Trigger: section masuk viewport.
- Trigger hanya digunakan satu kali.
- Cleanup dilakukan saat komponen di-unmount.
- `prefers-reduced-motion` respected.

### Modal Struktur

- Klik diagram pada `03 / STRUKTUR PEMERINTAHAN` membuka modal.
- Mendukung tutup dengan tombol, backdrop, dan Escape.
- Mendukung navigasi gambar dengan tombol serta keyboard arrow.
- Body page dikunci selama modal aktif.

### Galeri

- Filter kategori pada `/galeri` menggunakan client-side state.
- Preview homepage menampilkan lima foto terbaru.

---

## Aset Gambar

```text
public/gambar/
├── background/       # 3 background hero
├── galeri/           # 13 foto dokumentasi
├── icon/             # 19 icon transparent untuk UI/homepage
├── struktur/         # Foto kepala desa/perangkat + 2 diagram
└── logo_pasangkayu.png
```

Aset website tambahan:

- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

Icon yang dipakai pada homepage antara lain:

- `kantor_desa.webp`
- `batas_wilayah.webp`
- `dusun_wilayah.webp`
- `lokasi.webp`
- `dokumen.webp`
- `data_penduduk.webp`
- `keluarga.webp`
- `potensi_desa.webp`
- `jadwal_kegiatan.webp`
- `galeri_dokumentasi.webp`
- `statistik.webp`

---

## Struktur Folder

```text
desa-bajawali/
├── app/
│   ├── layout.tsx                    # Root layout, font, metadata, Navbar, Footer, BottomNav
│   ├── page.tsx                      # Beranda dan semua modul homepage
│   ├── globals.css                   # Tailwind v4 + design token
│   ├── favicon.ico
│   ├── icon.png
│   ├── apple-icon.png
│   ├── admin/
│   │   ├── (auth)/login/page.tsx     # Login Supabase
│   │   └── (protected)/
│   │       ├── layout.tsx            # Layout admin terautentikasi
│   │       ├── page.tsx              # Dashboard admin
│   │       ├── profil/page.tsx       # Manajemen profil
│   │       ├── pengguna/page.tsx     # Manajemen pengguna
│   │       ├── data-desa/page.tsx    # Data/statistik admin
│   │       ├── berita/
│   │       │   ├── page.tsx
│   │       │   ├── tambah/page.tsx
│   │       │   ├── [id]/edit/page.tsx
│   │       │   └── DeleteNewsButton.tsx
│   │       └── galeri/
│   │           ├── page.tsx
│   │           ├── tambah/page.tsx
│   │           ├── [id]/edit/page.tsx
│   │           └── DeleteGalleryButton.tsx
│   ├── berita/
│   │   ├── page.tsx                  # Daftar berita
│   │   └── [slug]/page.tsx           # Detail berita + metadata + related news
│   ├── data-desa/page.tsx             # Statistik + 6 grafik
│   ├── galeri/page.tsx                # Galeri + filter
│   ├── kontak/page.tsx                # Kontak, WhatsApp, email, peta
│   ├── potensi/
│   │   ├── page.tsx
│   │   ├── pertanian/page.tsx
│   │   ├── perikanan/page.tsx
│   │   ├── umkm/page.tsx
│   │   ├── pariwisata/page.tsx
│   │   └── sumber-daya-alam/page.tsx
│   └── profil/
│       ├── page.tsx
│       ├── sejarah/page.tsx
│       ├── visi-misi/page.tsx
│       ├── geografis/page.tsx
│       ├── demografi/page.tsx
│       └── struktur-pemerintahan/page.tsx
├── components/
│   ├── admin/                        # Form, uploader, sidebar, status, delete dialog
│   ├── animations/
│   │   └── HomeScrollEffects.tsx     # GSAP ScrollTrigger homepage
│   ├── charts/
│   │   ├── Charts.tsx                # Implementasi chart
│   │   └── ChartsWrapper.tsx         # Dynamic chart wrapper
│   ├── gallery/
│   │   ├── GalleryFilter.tsx          # Filter galeri client-side
│   │   └── StructureImageLightbox.tsx # Modal diagram struktur
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── HeroCarousel.tsx
│   │   ├── Footer.tsx
│   │   └── BottomNav.tsx
│   ├── map/
│   │   ├── Map.tsx
│   │   └── MapWrapper.tsx
│   └── ui/
│       └── NavigationChevron.tsx
├── data/
│   └── dummy.ts                      # Data lokal terpusat
├── lib/
│   ├── compression/image.ts
│   ├── data-source.ts                # Local/Supabase source switch
│   ├── queries/
│   │   ├── news.ts
│   │   └── gallery.ts
│   └── supabase/
│       ├── client.ts
│       └── server.ts
├── public/
│   ├── gambar/
│   │   ├── background/
│   │   ├── galeri/
│   │   ├── icon/
│   │   ├── struktur/
│   │   └── logo_pasangkayu.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── types/
│   └── database.ts                   # Type database Supabase
├── .env.local                        # Environment lokal (jangan di-commit)
├── .gitignore
├── AGENTS.md                         # Instruksi agent
├── BERITA.md                         # Naskah berita
├── CLAUDE.md                         # Instruksi Claude/project
├── DATA.md                            # Kebutuhan data
├── Data_real.md                      # Rangkuman data profil desa
├── FeatLanjutan.md                   # Catatan fitur lanjutan
├── InformationSupabase.md            # Catatan konfigurasi Supabase
├── NewNav.md                         # Spesifikasi navigasi
├── PRD.md                            # Product requirements
├── README.md                         # Dokumentasi utama
├── SKILL.md                          # Pedoman penyuntingan
├── design.md                         # Design system
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── opencode.jsonc                    # Konfigurasi tool lokal
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── proxy.ts                          # Session refresh + admin route protection
├── supabase-migration.sql            # Migrasi schema Supabase
└── tsconfig.json
```

---

## Dokumentasi Proyek

| File | Peran |
|---|---|
| `PRD.md` | Scope produk, sitemap, acceptance criteria, dan data governance |
| `design.md` | Design system, typography, layout, anti-template rules |
| `NewNav.md` | Spesifikasi desktop navigation dan mobile bottom navigation |
| `Data_real.md` | Ringkasan data asli Profil Desa Bajawali 2026 |
| `DATA.md` | Daftar data yang dibutuhkan dan status thereof |
| `BERITA.md` | Naskah tiga berita kegiatan desa |
| `InformationSupabase.md` | Catatan setup Supabase; jangan menyimpan secret key di README |
| `FeatLanjutan.md` | Catatan fitur lanjutan dan ide pengembangan |
| `eval.md` / `SKILL.md` | Pedoman penyuntingan teks dan pemeriksaan konten |
| `AGENTS.md` / `CLAUDE.md` | Instruksi kerja untuk agent AI |
| `supabase-migration.sql` | Definisi tabel dan perubahan database Supabase |

---

## Cara Menjalankan Secara Lokal

Pastikan Node.js dan pnpm sudah terpasang.

1. **Clone repository:**

   ```bash
   git clone https://github.com/mkeyzxi/desa-bajawali.git
   cd desa-bajawali
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Siapkan environment lokal:**

   Buat `.env.local` sesuai kebutuhan Supabase. Jangan committing secret atau anon key ke repository.

4. **Jalankan development server:**

   ```bash
   pnpm dev
   ```

5. **Buka di browser:**

   [http://localhost:3000](http://localhost:3000)

Perintah lain:

```bash
pnpm build       # Build produksi
pnpm start       # Menjalankan hasil build
pnpm lint        # Menjalankan ESLint
pnpm exec tsc --noEmit
```

---

## Konfigurasi Supabase

Kode Supabase membaca environment berikut:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

- Browser client: `lib/supabase/client.ts`
- Server client: `lib/supabase/server.ts`
- Session refresh dan route protection: `proxy.ts`
- Query news: `lib/queries/news.ts`
- Query gallery: `lib/queries/gallery.ts`
- Pilihan sumber data: `lib/data-source.ts`
- Skema tabel: `supabase-migration.sql`

Jangan menaruh service role key, secret key, atau token admin di `README.md`, source code publik, atau client-side environment variable.

---

## Validasi

Validasi yang digunakan:

```bash
pnpm exec tsc --noEmit
pnpm exec eslint app/page.tsx components/animations/HomeScrollEffects.tsx
pnpm build
```

Status saat ini:

- TypeScript: berhasil.
- Build Next.js: berhasil.
- ESLint file homepage dan animasi: berhasil.
- `pnpm lint` masih memiliki satu error existing yang tidak terkait homepage, yaitu `@typescript-eslint/no-explicit-any` pada `components/admin/NewsForm.tsx:59`, serta beberapa warning legacy.

---

## Pekerjaan Berikutnya

### SEO Teknis

- `app/sitemap.ts` dan `app/robots.ts`.
- `metadataBase`, canonical URL, Open Graph, dan Twitter Card.
- Structured data JSON-LD untuk website, breadcrumb, dan berita.
- Breadcrumb reusable.
- Dynamic metadata per berita dan kategori.

### Interaksi Halaman

- Tombol **Salin Alamat** pada halaman kontak.
- Peningkatan filter/lightbox galeri penuh jika diperlukan.
- Halaman 404, loading, dan error state.
- Filter berita dan grafik berita.
- Pencarian internal opsional.

### Data dan Aset

- Ganti foto stok potensi dengan dokumentasi asli Desa Bajawali.
- Tambahkan GeoJSON tervalidasi untuk polygon batas desa.
- Pisahkan/rename `data/dummy.ts` menjadi modul data yang lebih domain-specific.
- Lengkapi data sakular dan sumber metadata statistik.
- Tentukan status data fallback versus data production.

### Operasional

- Registrasi Google Search Console.
- Analytics dan monitoring uptime.
- Uji Lighthouse dan audit aksesibilitas setelah data production siap.
- Deployment dan backup database.

---

*Dikembangkan untuk Desa Bajawali, Lariang, Pasangkayu — oleh Universitas Muhammadiyah Mamuju, Posko Desa Bajawali.*
