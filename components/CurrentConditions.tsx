import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { formatTemperature } from '../lib/formatters';
import useWeather from '../lib/useWeather';

const CurrentConditions = () => {
  const { weather } = useWeather();
  return (
    <Box textAlign='center'>
      <Heading as='h2' size='lg' textTransform='capitalize'>
        {weather.weather[0].description}
      </Heading>
      <Heading size='4xl' color={useColorModeValue('teal.500', 'teal.200')}>
        {formatTemperature('c', weather.main.temp)}
      </Heading>
    </Box>
  );
};

export default CurrentConditions;
