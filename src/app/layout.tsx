import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} · ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.title,
    'Backend Engineer',
    'Distributed Systems',
    'Platform Engineering',
    'Software Engineer',
    'Scalable systems',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
    type: 'website',
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      { url: '/assets/og.png', width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  icons: {
    icon: [
      { url: '/assets/favicon.ico', type: 'image/x-icon' },
      {
        url: '/assets/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/assets/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/assets/manifest.json',
  category: 'technology',
  creator: siteConfig.name,
  publisher: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  url: siteUrl,
  sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${interTight.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
