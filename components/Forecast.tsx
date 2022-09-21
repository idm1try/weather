import {
  Box,
  Center,
  GridItem,
  SimpleGrid,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { formatTemperature, formatTime } from '../lib/formatters';
import useWeather from '../lib/useWeather';
import WeatherIcon from './WeatherIcon';

const Forecast = () => {
  const { isLoadingForecast, forecast, units } = useWeather();
  const spinnerColor = useColorModeValue('teal.500', 'teal.200');
  const gridItemColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box>
      {isLoadingForecast ? (
        <Center>
          <Spinner color={spinnerColor} thickness='4px' speed='0.65s' size='xl' my={5} />
        </Center>
      ) : (
        <SimpleGrid spacing={2} columns={{ base: 2, md: 4 }} textAlign='center'>
          {forecast?.list
            ?.map((forecast, index: number) => {
              return (
                <GridItem bgColor={gridItemColor} borderRadius='md' p={2} key={index}>
                  <Text fontWeight='bold'>{formatTime(units, forecast.dt)}</Text>
                  <Text>{formatTemperature(units, forecast.main.temp)}</Text>
                  <WeatherIcon size={100} variant={forecast.weather[0].icon} />
                  <Text fontWeight='bold' textTransform='capitalize'>
                    {forecast.weather[0].description}
                  </Text>
                  {formatTemperature(units, forecast.main.feels_like) !=
                  formatTemperature(units, forecast.main.temp) ? (
                    <Text color='gray.500'>
                      Feels Like: {formatTemperature(units, forecast.main.feels_like)}
                    </Text>
                  ) : (
                    <br />
                  )}
                </GridItem>
              );
            })
            .slice(0, 8)}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Forecast;
