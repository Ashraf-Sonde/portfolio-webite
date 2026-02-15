import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: `${siteConfig.name} · Senior Software Engineer`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} · Senior Software Engineer`,
    description: siteConfig.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
