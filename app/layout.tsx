import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Lumivex Smartwatch — Wear the Future. Live the Moment.',
    template: '%s | Lumivex',
  },
  description:
    'Lumivex smartwatches — 21-day battery, ECG, SpO2, blood pressure & AI coaching. Titanium build. Clinical-grade sensors. Free shipping.',
  keywords: [
    'smartwatch',
    'best smartwatch 2025',
    'health tracking smartwatch',
    'smartwatch with ECG and blood pressure',
    'long battery life smartwatch',
    'AI health coaching smartwatch',
  ],
  openGraph: {
    title: 'Lumivex — The Smartwatch That Knows You',
    description:
      'Clinical-grade health sensors, 21-day battery, and AI coaching in a titanium smartwatch. Discover Lumivex.',
    url: 'https://lumivex.com',
    siteName: 'Lumivex',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumivex — The Smartwatch That Knows You',
    description: 'Clinical-grade sensors, 21-day battery, AI health coaching.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumivex',
  url: 'https://lumivex.com',
  description:
    'Lumivex smartwatches combine titanium-grade durability, 21-day battery life, and clinically tested health sensors with an AI coach that turns raw biometrics into life-changing insights.',
  foundingDate: '2022',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@lumivex.com',
    availableLanguage: 'English',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
