import {
  Box,
  Divider,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { TbDroplet, TbSunrise, TbSunset, TbWind } from 'react-icons/tb';
import { formatSpeed, formatTemperature, formatTime } from '../lib/formatters';
import useWeather from '../lib/useWeather';
import WeatherIcon from './WeatherIcon';

const CurrentConditions = () => {
  const { isLoading, weather, units } = useWeather();
  const headingColor = useColorModeValue('teal.500', 'teal.200');
  const stackColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box>
      {!isLoading && (
        <Box>
          <HStack>
            <Box w={{ base: '100%', sm: '50%' }}>
              <Heading size='lg' display={{ base: 'inline-block', md: 'none' }}>
                {weather.name}
              </Heading>
              <Heading as='h2' size='lg' textTransform='capitalize'>
                {weather.weather[0].description}
              </Heading>
              <Heading size='4xl' color={headingColor} lineHeight='normal'>
                {formatTemperature(units, weather.main.temp)}
              </Heading>
              {formatTemperature(units, weather.main.feels_like) !=
                formatTemperature(units, weather.main.temp) && (
                <Text fontWeight='bold' fontSize='lg'>
                  Feels Like: {formatTemperature(units, weather.main.feels_like)}
                </Text>
              )}
              {formatTemperature(units, weather.main.temp_max) !=
                formatTemperature(units, weather.main.temp_min) && (
                <Text fontSize='lg' textColor='gray.500'>
                  High: {formatTemperature(units, weather.main.temp_max)} Low:{' '}
                  {formatTemperature(units, weather.main.temp_min)}
                </Text>
              )}
            </Box>
            <Box w='50%' fontSize='lg' textAlign='right' display={{ base: 'none', sm: 'block' }}>
              <WeatherIcon size={128} variant={weather.weather[0].icon} />
            </Box>
          </HStack>
          <Stack bgColor={stackColor} p={3} my={5} borderRadius='md'>
            <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
              <GridItem>
                <HStack>
                  <Box w='50%'>
                    <Icon as={TbWind} h={3} w={3} mr={1} />
                    <b>Wind</b>
                  </Box>
                  <Box w='50%' textAlign='right'>
                    {formatSpeed(units, weather.wind.speed)}
                  </Box>
                </HStack>
                <Divider mt={2} />
              </GridItem>
              <GridItem>
                <HStack>
                  <Box w='50%'>
                    <Icon as={TbDroplet} h={3} w={3} mr={1} />
                    <b>Humidity</b>
                  </Box>
                  <Box w='50%' textAlign='right'>
                    {weather.main.humidity}%
                  </Box>
                </HStack>
                <Divider mt={2} />
              </GridItem>
              <GridItem>
                <HStack>
                  <Box w='50%'>
                    <Icon as={TbSunrise} h={3} w={3} mr={1} />
                    <b>Sunrise</b>
                  </Box>
                  <Box w='50%' textAlign='right'>
                    {formatTime(units, weather.sys.sunrise)}
                  </Box>
                </HStack>
                <Divider display={{ md: 'none' }} mt={2} />
              </GridItem>
              <GridItem>
                <HStack>
                  <Box w='50%'>
                    <Icon as={TbSunset} h={3} w={3} mr={1} />
                    <b>Sunset</b>
                  </Box>
                  <Box w='50%' textAlign='right'>
                    {formatTime(units, weather.sys.sunset)}
                  </Box>
                </HStack>
              </GridItem>
            </SimpleGrid>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default CurrentConditions;
