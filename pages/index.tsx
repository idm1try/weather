import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import CityNotFound from '../components/CityNotFound';
import Forecast from '../components/Forecast';
import CurrentConditions from '../components/CurrentConditions';
import useWeather from '../lib/useWeather';

const Home = () => {
  const { weather, isLoading } = useWeather();

  return (
    <Box mt={5}>
      {isLoading ? (
        <Center>
          <Spinner size='xl' my={5} />
        </Center>
      ) : (
        <Box>
          {weather.cod == '404' ? (
            <CityNotFound />
          ) : (
            <Box>
              {weather.main ? (
                <Box>
                  <CurrentConditions />
                  <Forecast />
                </Box>
              ) : (
                <Heading textAlign='center'>Enter City</Heading>
              )}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Home;
export { getServerSideProps } from '../components/Chakra';
