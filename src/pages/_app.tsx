import Meta from '@/components/meta'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import '../styles/index.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ display: 'swap' })

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ThemeProvider attribute='class'>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <div className='mx-auto max-w-3xl px-6 pb-20 selection:bg-neutral-200 dark:selection:bg-neutral-700'>
      <Meta />
      <Analytics />
      <main className='pt-6 sm:pt-16'>
        <Component {...pageProps} key={router.route} />
      </main>
    </div>
  </ThemeProvider>
)

export default Website
