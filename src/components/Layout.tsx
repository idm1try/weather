import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import useWeather from 'lib/useWeather';
import Footer from './Footer';
import GoToTopButton from './GoToTopButton';
import Navbar from './Navbar';

const Main = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useWeather();

  return (
    <Box as='main' pb={8}>
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

      <Navbar />

      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
      {!isLoading && <Footer />}
      <GoToTopButton />
    </Box>
  );
};

export default Main;
