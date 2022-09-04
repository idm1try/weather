import { Box, Heading } from '@chakra-ui/react';

export default function App() {
  return (
    <Box mt={5}>
      <Heading>Hello world</Heading>
    </Box>
  );
}

export { getServerSideProps } from '../components/chakra';
