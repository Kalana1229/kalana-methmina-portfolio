import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { PERSONAL_INFO } from '@/lib/data/portfolio';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Developer & Cybersecurity Professional`,
  description: PERSONAL_INFO.description,
  keywords: [
    'Developer',
    'Software Engineer',
    'Cybersecurity',
    'Full-Stack',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: `${PERSONAL_INFO.name} | Developer & Cybersecurity Professional`,
    description: PERSONAL_INFO.description,
    siteName: PERSONAL_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | Developer & Cybersecurity Professional`,
    description: PERSONAL_INFO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload important fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* SEO Meta Tags */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: PERSONAL_INFO.name,
              url: 'https://yourportfolio.com',
              jobTitle: PERSONAL_INFO.title,
              description: PERSONAL_INFO.description,
              email: PERSONAL_INFO.email,
              telephone: PERSONAL_INFO.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: PERSONAL_INFO.location,
              },
              sameAs: [
                'https://github.com/yourusername',
                'https://linkedin.com/in/yourusername',
                'https://twitter.com/yourusername',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

        {/* Analytics (optional - uncomment and add your tracking ID) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
      </body>
    </html>
  );
}
