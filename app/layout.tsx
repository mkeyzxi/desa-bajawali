import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";

const manrope = Manrope({
  variable: "--font-ui",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-editorial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Desa Bajawali",
  description: "Portal informasi resmi Desa Bajawali, Kecamatan Lariang, Kabupaten Pasangkayu, Sulawesi Barat.",
  // Icons are provided by the file conventions in this directory:
  // app/favicon.ico, app/icon.png, app/apple-icon.png
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${manrope.variable} ${sourceSerif4.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {/* Main Content with Mobile Bottom Padding */}
        <main className="flex-1 md:pb-0 pb-[72px]">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
