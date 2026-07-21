import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://noorava.org'),
  title: {
    default: 'NoorAva | Where Rumi’s Poetry Comes Alive',
    template: '%s | NoorAva',
  },
  description:
    'NoorAva is a nonprofit institute devoted to bringing the wisdom of Rumi and Hekmat-e Khosrovani to life through reading, interpretation, music, and dance.',
  openGraph: {
    title: 'NoorAva',
    description: 'Where Rumi’s Poetry Comes Alive.',
    url: 'https://noorava.org/',
    siteName: 'NoorAva',
    images: [
      {
        url: '/images/figma/hero.jpg',
        width: 3000,
        height: 2000,
        alt: 'Persian classical instrument performance',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: [{ url: '/images/figma/noorava-logo-purple.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#5F4883',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={bricolage.variable}>{children}</body>
    </html>
  );
}
