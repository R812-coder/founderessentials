import type { Metadata } from 'next';
import { Instrument_Serif, Newsreader, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://founderessentials.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'founder essentials — Plain-language guides for new Florida LLC owners',
    template: '%s · founder essentials',
  },
  description:
    'A 30-day operational guide for new Florida businesses. Banking, registered agents, EINs, annual reports, and the tools that actually fit your industry.',
  keywords: [
    'florida llc',
    'form florida llc',
    'florida business bank',
    'florida registered agent',
    'florida annual report',
    'florida ein',
  ],
  authors: [{ name: 'Sunwrit' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'founder essentials',
    title: 'founder essentials — Plain-language guides for new Florida LLC owners',
    description:
      'A 30-day operational guide for new Florida businesses, written by someone who watches the Sunbiz formation feed daily.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'founder essentials — Plain-language guides for new Florida LLC owners',
    description:
      'A 30-day operational guide for new Florida businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
