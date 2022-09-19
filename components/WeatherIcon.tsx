import { Box, Icon } from '@chakra-ui/react';
import {
  TbCloud,
  TbCloudRain,
  TbCloudStorm,
  TbMist,
  TbMoonStars,
  TbSnowflake,
  TbSun,
} from 'react-icons/tb';
import { WiDayCloudy, WiNightAltCloudy } from 'react-icons/wi';

interface Props {
  size: number;
  variant: string;
}

const WeatherIcon = ({ variant, size }: Props) => (
  <Box>
    {variant == '01d' && <Icon as={TbSun} w={size} h={size} />}
    {variant == '01n' && <Icon as={TbMoonStars} w={size} h={size} />}

    {variant == '02d' && <Icon as={WiDayCloudy} w={size} h={size} />}
    {variant == '02n' && <Icon as={WiNightAltCloudy} w={size} h={size} />}

    {variant == '03d' && <Icon as={TbCloud} w={size} h={size} />}
    {variant == '03n' && <Icon as={TbCloud} w={size} h={size} />}

    {variant == '04d' && <Icon as={TbCloud} w={size} h={size} />}
    {variant == '04n' && <Icon as={TbCloud} w={size} h={size} />}

    {variant == '09d' && <Icon as={TbCloudRain} w={size} h={size} />}
    {variant == '09n' && <Icon as={TbCloudRain} w={size} h={size} />}

    {variant == '10d' && <Icon as={TbCloudRain} w={size} h={size} />}
    {variant == '10n' && <Icon as={TbCloudRain} w={size} h={size} />}

    {variant == '11d' && <Icon as={TbCloudStorm} w={size} h={size} />}
    {variant == '11n' && <Icon as={TbCloudStorm} w={size} h={size} />}

    {variant == '13d' && <Icon as={TbSnowflake} w={size} h={size} />}
    {variant == '13n' && <Icon as={TbSnowflake} w={size} h={size} />}

    {variant == '50d' && <Icon as={TbMist} w={size} h={size} />}
    {variant == '50n' && <Icon as={TbMist} w={size} h={size} />}
  </Box>
);

export default WeatherIcon;
