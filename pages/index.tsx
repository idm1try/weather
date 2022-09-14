import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import useWeather from '../lib/useWeather';

const Home = () => {
  const { weather, isLoading } = useWeather();

  return (
    <Box mt={5}>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box>
          {!weather.main ? <Heading>Failed to load</Heading> : <Heading>{weather.name}</Heading>}
        </Box>
      )}
    </Box>
  );
};

export default Home;
export { getServerSideProps } from '../components/chakra';
