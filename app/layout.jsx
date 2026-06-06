import React from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemePreloader from '../components/ThemePreloader';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});


export const metadata = {
  metadataBase: new URL('https://isharabandara.com'),
  title: {
    default: 'Ishara Bandara',
    template: '%s | Ishara Bandara'
  },
  description: 'Ishara Bandara is a software developer and technology consulting expert building high-end digital products, branding, marketing, and web interfaces.',
  keywords: ['ishara bandara', 'software engineering', 'react developer', 'branding', 'logo designer', 'website developer', 'web design sri lanka', 'freelancer sri lanka'],
  authors: [{ name: 'Ishara Bandara' }],
  creator: 'Ishara Bandara',
  openGraph: {
    title: 'Ishara Bandara | Modern Software Services & Creative Specialist',
    description: 'Premium web development, branding, graphic design, and video editing solutions.',
    url: 'https://isharabandara.com',
    siteName: 'Ishara Bandara',
    images: [
      {
        url: '/img/main_photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Ishara Bandara Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ishara Bandara | Let&apos;s Build Something Brilliant',
    description: 'Premium web development, branding, UX / UI design and software development solutions.',
    images: ['/img/main_photo.jpg'],
  },
  icons: {
    icon: '/img/favicon.ico',
    shortcut: '/img/favicon.ico',
    apple: '/img/logo.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-zinc-950 text-zinc-50 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen flex flex-col relative overflow-x-hidden bg-grid-pattern">
        {/* Page Load Preloader & Offline Connection Status Overlay */}
        <ThemePreloader />

        {/* Dynamic Glowing Ambient Lights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

        <header>
          <Navbar />
        </header>

        <main className="flex-grow pt-28 pb-20 relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
