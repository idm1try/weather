import Layout from '../components/Layout';
import Chakra from '../components/Chakra';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <motion.div
          initial='hidden'
          animate='enter'
          exit='exit'
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </Layout>
    </Chakra>
  );
}

export default Website;
