import { Box, Center, Heading, Spinner, useColorModeValue } from '@chakra-ui/react';
import Animate from '../components/Animate';
import CityNotFound from '../components/CityNotFound';
import CurrentConditions from '../components/CurrentConditions';
import Forecast from '../components/Forecast';
import useWeather from '../lib/useWeather';

const Home = () => {
  const { isLoading, weather } = useWeather();
  const spinnerColor = useColorModeValue('teal.500', 'teal.200');

  return (
    <Box mt={5}>
      {isLoading ? (
        <Center height='76vh'>
          <Spinner color={spinnerColor} thickness='4px' speed='0.65s' size='xl' />
        </Center>
      ) : (
        <Animate>
          {weather.cod == '404' ? (
            <CityNotFound />
          ) : (
            <Box>
              {!weather.message ? (
                <Box>
                  <CurrentConditions />
                  <Forecast />
                </Box>
              ) : (
                <Heading textAlign='center'>Enter City</Heading>
              )}
            </Box>
          )}
        </Animate>
      )}
    </Box>
  );
};

export default Home;
export { getServerSideProps } from '../components/Chakra';
