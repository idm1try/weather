import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'components/Layout';
import theme from 'lib/theme';
import { AppProps } from 'next/app';

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
);

export default Website;
