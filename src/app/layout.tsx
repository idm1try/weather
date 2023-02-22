import './global.css'
import { AnalyticsProvider } from './analytics'
import { Inter } from 'next/font/google'

const fontSans = Inter({ variable: '--font-sans' })

export const metadata = {
  title: 'Weather',
  themeColor: '#111010',
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
    images:
      'https://idm1try.ru/api/og?heading=Weather&desc=View%20your%20weather',
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
    url: 'https://weather.idm1try.ru/',
    images:
      'https://idm1try.ru/api/og?heading=Weather&desc=View%20your%20weather',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://weather.idm1try.ru/',
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
      className={`bg-neutral-50 font-sans text-neutral-900 antialiased selection:bg-neutral-200 dark:bg-[#111010] dark:text-neutral-100 dark:selection:bg-neutral-700 ${fontSans.variable}`}
    >
      <body>
        <div className='mx-auto max-w-3xl px-6 pb-20'>
          <main className='pt-6 sm:pt-16'>
            {children}
            <AnalyticsProvider />
          </main>
        </div>
      </body>
    </html>
  )
}
