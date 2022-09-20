import { Box, Container, IconButton } from '@chakra-ui/react';
import { useWindowScroll } from '@mantine/hooks';
import Head from 'next/head';
import { ReactNode } from 'react';
import { TbArrowUp } from 'react-icons/tb';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  const [scroll, scrollTo] = useWindowScroll();

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
      <Footer />
      {scroll.y > 100 && (
        <IconButton
          aria-label='Scroll to top'
          icon={<TbArrowUp />}
          colorScheme='teal'
          onClick={() => scrollTo({ y: 0 })}
          position='fixed'
          bottom='24px'
          right='24px'
          pr={0}
          zIndex={100}
          tabIndex={0}
        />
      )}
    </Box>
  );
};

export default Main;
