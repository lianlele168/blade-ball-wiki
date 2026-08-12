import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blade Ball Codes & Ability Tier List (August 2026) — Roblox Wiki',
  description: 'Updated Roblox Blade Ball codes for free wheel spins and coins. Explore ability tier lists (Infinity, Dragon) and sword trading value lists.',
  keywords: [
    'blade ball codes',
    'blade ball tier list',
    'blade ball ability tier list',
    'blade ball sword values',
    'blade ball infinity ability',
    'blade ball codes august 2026'
  ],
  authors: [{ name: 'Blade Ball Wiki Team' }],
  openGraph: {
    title: 'Blade Ball Codes & Ability Tier List — Roblox Blade Ball Wiki',
    description: 'Updated Blade Ball codes for free wheel spins, ability rankings, and sword values.',
    url: 'https://blade-ball-wiki.vercel.app',
    siteName: 'Blade Ball Wiki',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blade Ball Codes & Tier List — Roblox Wiki',
    description: 'Get active Blade Ball codes, ability tier lists, and trade values.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'K0YFUdYGQH2cucEllkbzoEcKAZoFJ7rGguAERbz2ZGM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#030712] text-slate-100 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
