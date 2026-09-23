'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Determine navbar theme based on route and scroll position
  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled

  // Helper for active state
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-in-out hidden md:block ${
        isTransparent
          ? 'bg-transparent border-transparent py-2'
          : 'bg-paper-50/95 backdrop-blur-md border-b border-paper-200 py-0 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 py-4 md:py-5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/gambar/logo_pasangkayu.png"
            alt="Lambang Kabupaten Pasangkayu"
            width={728}
            height={800}
            sizes="48px"
            className="h-11 w-auto shrink-0"
          />
          <span className="flex flex-col">
            <span
              className={`font-editorial text-2xl lg:text-3xl font-semibold tracking-tight transition-colors ${
                isTransparent ? '!text-white' : 'text-ink-950 group-hover:text-green-800'
              }`}
            >
              Desa Bajawali
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                isTransparent ? 'text-white/80' : 'text-ink-500'
              }`}
            >
              Kab. Pasangkayu
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-6 lg:gap-8">
          {/* Beranda */}
          <Link
            href="/"
            className={`text-[15px] font-semibold transition-all py-2 border-b-2 ${
              isActive('/')
                ? isTransparent
                  ? 'text-white border-white'
                  : 'text-green-700 border-green-700'
                : isTransparent
                  ? 'text-white/80 border-transparent hover:text-white'
                  : 'text-ink-800 border-transparent hover:text-green-700 hover:border-green-700'
            }`}
          >
            Beranda
          </Link>

          {/* Profil Desa */}
          <div className="group relative">
            <Link
              href="/profil"
              className={`text-[15px] font-semibold flex items-center gap-1 transition-all py-2 border-b-2 ${
                isActive('/profil')
                  ? isTransparent
                    ? 'text-white border-white'
                    : 'text-green-700 border-green-700'
                  : isTransparent
                    ? 'text-white/80 border-transparent hover:text-white'
                    : 'text-ink-800 border-transparent hover:text-green-700 hover:border-green-700'
              }`}
            >
              Profil Desa
            </Link>
            <div className="absolute top-[100%] left-0 w-56 bg-paper-50 border border-paper-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 rounded-md translate-y-2 group-hover:translate-y-0">
              {[
                {name: 'Sejarah', path: '/profil/sejarah'},
                {name: 'Moto & Program', path: '/profil/visi-misi'},
                {name: 'Geografis', path: '/profil/geografis'},
                {name: 'Demografi', path: '/profil/demografi'},
                {name: 'Pemerintahan', path: '/profil/struktur-pemerintahan'},
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm px-4 py-2.5 rounded-md transition-colors ${
                    pathname === item.path
                      ? 'text-green-800 bg-green-100 font-bold'
                      : 'text-ink-800 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Potensi Desa */}
          <div className="group relative">
            <Link
              href="/potensi"
              className={`text-[15px] font-semibold flex items-center gap-1 transition-all py-2 border-b-2 ${
                isActive('/potensi')
                  ? isTransparent
                    ? 'text-white border-white'
                    : 'text-green-700 border-green-700'
                  : isTransparent
                    ? 'text-white/80 border-transparent hover:text-white'
                    : 'text-ink-800 border-transparent hover:text-green-700 hover:border-green-700'
              }`}
            >
              Potensi Desa
            </Link>
            <div className="absolute top-[100%] left-0 w-56 bg-paper-50 border border-paper-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 rounded-md translate-y-2 group-hover:translate-y-0">
              {[
                {name: 'Pertanian', path: '/potensi/pertanian'},
                {name: 'Perikanan', path: '/potensi/perikanan'},
                {name: 'UMKM', path: '/potensi/umkm'},
                {name: 'Pariwisata', path: '/potensi/pariwisata'},
                {name: 'Sumber Daya Alam', path: '/potensi/sumber-daya-alam'},
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm px-4 py-2.5 rounded-md transition-colors ${
                    pathname === item.path
                      ? 'text-green-800 bg-green-100 font-bold'
                      : 'text-ink-800 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Berita */}
          <Link
            href="/berita"
            className={`text-[15px] font-semibold transition-all py-2 border-b-2 ${
              isActive('/berita')
                ? isTransparent
                  ? 'text-white border-white'
                  : 'text-green-700 border-green-700'
                : isTransparent
                  ? 'text-white/80 border-transparent hover:text-white'
                  : 'text-ink-800 border-transparent hover:text-green-700 hover:border-green-700'
            }`}
          >
            Berita
          </Link>

          {/* Galeri */}
          <Link
            href="/galeri"
            className={`text-[15px] font-semibold transition-all py-2 border-b-2 ${
              isActive('/galeri')
                ? isTransparent
                  ? 'text-white border-white'
                  : 'text-green-700 border-green-700'
                : isTransparent
                  ? 'text-white/80 border-transparent hover:text-white'
                  : 'text-ink-800 border-transparent hover:text-green-700 hover:border-green-700'
            }`}
          >
            Galeri
          </Link>

          {/* Data Desa */}
          <Link
            href="/data-desa"
            className={`text-[15px] font-semibold transition-all py-2 border-b-2 ${
              isActive('/data-desa')
                ? isTransparent
                  ? 'text-white border-white'
                  : 'text-green-700 border-green-700'
                : isTransparent
                  ? 'text-white/80 border-transparent hover:text-white'
                  : 'text-ink-800 border-transparent hover:text-green-700 hover:border-green-700'
            }`}
          >
            Data
          </Link>

          {/* Kontak */}
          <Link
            href="/kontak"
            className={`text-[15px] font-semibold transition-all py-2 border-b-2 ${
              isActive('/kontak')
                ? isTransparent
                  ? 'text-white border-white'
                  : 'text-green-700 border-green-700'
                : isTransparent
                  ? 'text-white/80 border-transparent hover:text-white'
                  : 'text-ink-800 border-transparent hover:text-green-700 hover:border-green-700'
            }`}
          >
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  )
}
