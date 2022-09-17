import Layout from '../components/Layout';
import Chakra from '../components/Chakra';
import type { AppProps } from 'next/app';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  );
}

export default Website;
