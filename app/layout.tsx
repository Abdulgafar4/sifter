import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sifter - Luxury Landscaping',
  keywords: ['landscaping', 'luxury', 'design', 'outdoor', 'gardening'],
  authors: [{ name: 'Sifter', url: 'https://sifter.dev' }],
  creator: 'Sifter',
  openGraph: {
    title: 'Sifter - Luxury Landscaping',
    description: 'Explore the art of luxury landscaping with Sifter.',
    url: 'https://luxury-landscaping.sifter.dev',
    siteName: 'Sifter - Luxury Landscaping',
    images: [
      {
        url: 'https://luxury-landscaping.sifter.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luxury Landscaping',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sifter - Luxury Landscaping',
    description: 'Explore the art of luxury landscaping with Sifter.',
    images: ['https://luxury-landscaping.sifter.dev/og-image.png'],
    creator: '@sifterdev',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  themeColor: '#ffffff',
  
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
