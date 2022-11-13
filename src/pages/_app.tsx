import Footer from 'components/Footer';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const Website = ({ Component, pageProps, router }: AppProps) => (
  <div>
    <Head>
      <title>Weather</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='Weather App, build with TypeScript and NextJS' />
      <meta name='author' content='idm1try' />
      <meta name='twitter:title' content='Weather App' />
      <meta name='twitter:site' content='@idm1try' />
      <meta name='twitter:creator' content='@idm1try' />
      <meta property='og:site_name' content='Weather App' />
      <meta name='og:title' content='Weather App' />
      <meta property='og:type' content='website' />
      <link rel='preconnect' href='https://api.openweathermap.org' />
    </Head>
    <Component {...pageProps} key={router.route} />
    <Footer />
  </div>
);

export default Website;
