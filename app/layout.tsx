import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // <-- 1. IMPORT ANALYTICS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// <-- 2. UPDATE METADATA RESMI GEMAS EDUTECH
export const metadata: Metadata = {
  title: "Gemas Edutech - Generasi Emas Masa Depan Edukasi Teknologi",
  description: "Portal Pembelajaran Interaktif Informatika, Koding & Kecerdasan Artifisial (AI)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics /> {/* <-- 3. PASANG KOMPONEN ANALYTICS */}
      </body>
    </html>
  );
}