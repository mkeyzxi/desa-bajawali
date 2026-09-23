'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Home,
  Landmark,
  Newspaper,
  MoreHorizontal,
  Sprout,
  Images,
  BarChart3,
  Phone,
  X
} from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // Fungsi pengecekan status aktif (termasuk sub-route)
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Jika kembali ke paling atas, pastikan terlihat
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Jika scroll ke bawah, sembunyikan
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        // Tutup menu drawer otomatis saat scroll down
        if (isMoreMenuOpen) setIsMoreMenuOpen(false);
      } 
      // Jika scroll ke atas, tampilkan kembali
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Gunakan passive listener untuk performa maksimal
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMoreMenuOpen]);

  // Tutup menu saat rute berubah (disesuaikan saat render, bukan di dalam effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsMoreMenuOpen(false);
  }

  const moreMenuItems = [
    { name: 'Potensi', path: '/potensi', icon: Sprout },
    { name: 'Galeri', path: '/galeri', icon: Images },
    { name: 'Data Desa', path: '/data-desa', icon: BarChart3 },
    { name: 'Kontak', path: '/kontak', icon: Phone },
  ];

  const isMoreMenuActive = moreMenuItems.some(item => isActive(item.path));

  return (
    <>
      {/* Drawer Overlay */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[9998] md:hidden transition-opacity duration-300"
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}

      {/* Drawer Menu (Lainnya) */}
      <div 
        className={`fixed bottom-[72px] inset-x-0 bg-paper-50 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[9999] md:hidden transition-transform duration-300 ease-out transform ${
          isMoreMenuOpen ? 'translate-y-0' : 'translate-y-[150%]'
        } pb-safe`}
      >
        <div className="p-4 border-b border-paper-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/gambar/logo_pasangkayu.png"
              alt="Lambang Kabupaten Pasangkayu"
              width={728}
              height={800}
              sizes="40px"
              className="h-9 w-auto shrink-0"
            />
            <h3 className="font-semibold text-ink-950 font-editorial text-lg">Menu Lainnya</h3>
          </div>
          <button 
            onClick={() => setIsMoreMenuOpen(false)}
            className="p-2 text-ink-600 hover:bg-paper-200 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-4 grid grid-cols-4 gap-4">
          {moreMenuItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="flex flex-col items-center justify-start gap-2"
              >
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                    active ? 'bg-green-100 text-green-700' : 'bg-paper-100 text-ink-700 hover:bg-paper-200'
                  }`}
                >
                  <Icon size={24} />
                </div>
                <span 
                  className={`text-[10px] text-center font-medium ${
                    active ? 'text-green-700 font-bold' : 'text-ink-700'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav 
        className={`fixed bottom-0 left-0 right-0 bg-paper-50/95 backdrop-blur-md border-t border-paper-200 z-[9999]  ${isMoreMenuOpen ? "rounded-none" : "rounded-t-4xl" }  md:hidden transition-transform duration-300 ease-in-out pb-safe ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-around items-center h-[72px] px-2">
          {/* Menu Beranda */}
          <Link href="/" className="flex flex-col items-center justify-center w-full h-full gap-1">
            <div className={`relative flex items-center justify-center w-12 h-8 rounded-full transition-colors ${isActive('/') ? 'bg-green-100 text-green-700' : 'text-ink-600'}`}>
              <Home size={22} />
            </div>
            <span className={`text-[11px] font-medium transition-colors ${isActive('/') ? 'text-green-700 font-bold' : 'text-ink-600'}`}>
              Beranda
            </span>
          </Link>

          {/* Menu Profil */}
          <Link href="/profil" className="flex flex-col items-center justify-center w-full h-full gap-1">
            <div className={`relative flex items-center justify-center w-12 h-8 rounded-full transition-colors ${isActive('/profil') ? 'bg-green-100 text-green-700' : 'text-ink-600'}`}>
              <Landmark size={22} />
            </div>
            <span className={`text-[11px] font-medium transition-colors ${isActive('/profil') ? 'text-green-700 font-bold' : 'text-ink-600'}`}>
              Profil
            </span>
          </Link>

          {/* Menu Berita */}
          <Link href="/berita" className="flex flex-col items-center justify-center w-full h-full gap-1">
            <div className={`relative flex items-center justify-center w-12 h-8 rounded-full transition-colors ${isActive('/berita') ? 'bg-green-100 text-green-700' : 'text-ink-600'}`}>
              <Newspaper size={22} />
            </div>
            <span className={`text-[11px] font-medium transition-colors ${isActive('/berita') ? 'text-green-700 font-bold' : 'text-ink-600'}`}>
              Berita
            </span>
          </Link>

          {/* Menu Lainnya */}
          <button 
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className="flex flex-col items-center justify-center w-full h-full gap-1"
          >
            <div className={`relative flex items-center justify-center w-12 h-8 rounded-full transition-colors ${isMoreMenuActive || isMoreMenuOpen ? 'bg-green-100 text-green-700' : 'text-ink-600'}`}>
              <MoreHorizontal size={22} />
              {/* Indicator dot if a submenu is active but menu is closed */}
              {isMoreMenuActive && !isMoreMenuOpen && (
                <span className="absolute top-1 right-2 w-2 h-2 bg-green-600 rounded-full"></span>
              )}
            </div>
            <span className={`text-[11px] font-medium transition-colors ${isMoreMenuActive || isMoreMenuOpen ? 'text-green-700 font-bold' : 'text-ink-600'}`}>
              Lainnya
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
