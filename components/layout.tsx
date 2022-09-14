import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Footer from './footer';
import { ReactNode } from 'react';
import Navbar from './navbar';

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Weather App, build with TypeScript and NextJS' />
        <meta name='author' content='idm1try' />
        <meta name='twitter:title' content='Weather App' />
        <meta name='twitter:site' content='@idm1try' />
        <meta name='twitter:creator' content='@idm1try' />
        <meta property='og:site_name' content='Weather App' />
        <meta name='og:title' content='Weather App' />
        <meta property='og:type' content='website' />
        <title>Weather</title>
      </Head>

      <Navbar />

      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
