import './global.css'
import { cn } from '@/lib/utils'
import { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const cartographCF = localFont({
  variable: '--font-cartographcf',
  src: [
    {
      path: '../../public/fonts/CartographCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CartographCF-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-BoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CartographCF-ExtraBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-ExtraBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CartographCF-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-HeavyItalic.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
})

export const viewport: Viewport = {
  themeColor: '#161616',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nxwtr.vercel.app'),
  title: 'Weather',
  description: 'View your weather',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Weather',
    site: '@idm1try',
    creator: '@idm1try',
    card: 'summary_large_image',
    description: 'View your weather',
    images: 'https://idm1try.vercel.app/api/og?heading=Weather&desc=View%20your%20weather',
  },
  openGraph: {
    title: {
      template: '%s | Weather',
      default: 'Weather',
    },
    description: 'View your weather',
    siteName: 'Weather',
    locale: 'en-US',
    type: 'website',
    url: 'https://nxwtr.vercel.app/',
    images: 'https://nxwtr.vercel.app/api/og?heading=Weather&desc=View%20your%20weather',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://nxwtr.vercel.app/',
  },
  manifest: '/site.webmanifest',
  other: {
    'darkreader-lock': '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'scroll-smooth font-sans text-text bg-base',
        'antialiased selection:bg-surface1',
        cartographCF.variable,
      )}
    >
      <body>
        <div className='mx-auto max-w-[850px] px-6 pb-20'>
          <main className='pt-6 sm:pt-16'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
