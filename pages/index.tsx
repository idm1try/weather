import { Box, Center, Heading, Spinner, useColorModeValue } from '@chakra-ui/react';
import Animate from '../components/Animate';
import CityNotFound from '../components/CityNotFound';
import CurrentConditions from '../components/CurrentConditions';
import Forecast from '../components/Forecast';
import useWeather from '../lib/useWeather';

const Weather = () => {
  const { isLoading, weather } = useWeather();
  const spinnerColor = useColorModeValue('teal.500', 'teal.200');

  return (
    <Box>
      {isLoading ? (
        <Center pos='fixed' top='50%' right='40%' left='40%'>
          <Spinner color={spinnerColor} thickness='4px' speed='0.65s' size='xl' />
        </Center>
      ) : (
        <Animate>
          {weather.cod == '404' ? (
            <CityNotFound />
          ) : (
            <Box mt={5}>
              {!weather.message ? (
                <Box>
                  <CurrentConditions />
                  <Forecast />
                </Box>
              ) : (
                <Heading textAlign='center' my={100}>
                  Enter City
                </Heading>
              )}
            </Box>
          )}
        </Animate>
      )}
    </Box>
  );
};

export default Weather;
