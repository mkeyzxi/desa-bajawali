import Link from 'next/link'
import {Menu, MapPin} from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-paper-200 bg-paper-50">
      <div className="container mx-auto px-5 lg:px-8 py-4 md:py-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex flex-col">
          <span className="font-editorial text-xl md:text-2xl font-semibold tracking-tight text-ink-950 group-hover:text-green-800 transition-colors">
            Desa Bajawali
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-400">
            Kab. Pasangkayu
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-ink-800 hover:text-green-700 transition-colors py-2 border-b-2 border-transparent hover:border-green-700"
          >
            Beranda
          </Link>
          <div className="group relative">
            <Link
              href="/profil"
              className="text-sm font-semibold text-ink-800 hover:text-green-700 transition-colors py-2 border-b-2 border-transparent hover:border-green-700 flex items-center gap-1"
            >
              Profil Desa
            </Link>
            <div className="absolute top-full left-0 mt-2 w-48 bg-paper-50 border border-paper-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
              <Link
                href="/profil/sejarah"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Sejarah
              </Link>
              <Link
                href="/profil/visi-misi"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Visi & Misi
              </Link>
              <Link
                href="/profil/geografis"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Geografis
              </Link>
              <Link
                href="/profil/demografi"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Demografi
              </Link>
              <Link
                href="/profil/struktur-pemerintahan"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Pemerintahan
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link
              href="/potensi"
              className="text-sm font-semibold text-ink-800 hover:text-green-700 transition-colors py-2 border-b-2 border-transparent hover:border-green-700"
            >
              Potensi Desa
            </Link>
            <div className="absolute top-full left-0 mt-2 w-48 bg-paper-50 border border-paper-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
              <Link
                href="/potensi/pertanian"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Pertanian
              </Link>
              <Link
                href="/potensi/perikanan"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Perikanan
              </Link>
              <Link
                href="/potensi/umkm"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                UMKM
              </Link>
              <Link
                href="/potensi/pariwisata"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Pariwisata
              </Link>
              <Link
                href="/potensi/sumber-daya-alam"
                className="text-sm text-ink-800 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-sm transition-colors"
              >
                Sumber Daya Alam
              </Link>
            </div>
          </div>
          <Link
            href="/berita"
            className="text-sm font-semibold text-ink-800 hover:text-green-700 transition-colors py-2 border-b-2 border-transparent hover:border-green-700"
          >
            Berita
          </Link>
          <Link
            href="/galeri"
            className="text-sm font-semibold text-ink-800 hover:text-green-700 transition-colors py-2 border-b-2 border-transparent hover:border-green-700"
          >
            Galeri
          </Link>
          <Link
            href="/data-desa"
            className="text-sm font-semibold text-ink-800 hover:text-green-700 transition-colors py-2 border-b-2 border-transparent hover:border-green-700"
          >
            Data
          </Link>
          <Link
            href="/kontak"
            className="text-sm font-semibold text-ink-800 hover:text-green-700 transition-colors py-2 border-b-2 border-transparent hover:border-green-700"
          >
            Kontak
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink-800 hover:bg-paper-100 rounded-md transition-colors"
          aria-label="Buka menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}
