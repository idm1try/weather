import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css'

const inter = Inter({ display: 'swap' })

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ThemeProvider attribute='class'>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <div className='mx-auto max-w-3xl px-6 pb-20 selection:bg-neutral-200 dark:selection:bg-neutral-700'>
      <Head>
        <title>Weather</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='View your weather' />
        <meta name='author' content='idm1try' />
        <meta name='twitter:title' content='Weather App' />
        <meta name='twitter:site' content='@idm1try' />
        <meta name='twitter:creator' content='@idm1try' />
        <meta property='og:site_name' content='Weather App' />
        <meta name='og:title' content='Weather App' />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://api.openweathermap.org' />
      </Head>
      <main className='pt-6 sm:pt-16'>
        <Component {...pageProps} key={router.route} />
      </main>
    </div>
  </ThemeProvider>
)

export default Website
