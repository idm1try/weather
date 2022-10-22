import { Icon } from '@chakra-ui/react';
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
  <>
    {variant == '01d' && <Icon as={TbSun} fontSize={size} />}
    {variant == '01n' && <Icon as={TbMoonStars} fontSize={size} />}

    {variant == '02d' && <Icon as={WiDayCloudy} fontSize={size} />}
    {variant == '02n' && <Icon as={WiNightAltCloudy} fontSize={size} />}

    {variant == '03d' && <Icon as={TbCloud} fontSize={size} />}
    {variant == '03n' && <Icon as={TbCloud} fontSize={size} />}

    {variant == '04d' && <Icon as={TbCloud} fontSize={size} />}
    {variant == '04n' && <Icon as={TbCloud} fontSize={size} />}

    {variant == '09d' && <Icon as={TbCloudRain} fontSize={size} />}
    {variant == '09n' && <Icon as={TbCloudRain} fontSize={size} />}

    {variant == '10d' && <Icon as={TbCloudRain} fontSize={size} />}
    {variant == '10n' && <Icon as={TbCloudRain} fontSize={size} />}

    {variant == '11d' && <Icon as={TbCloudStorm} fontSize={size} />}
    {variant == '11n' && <Icon as={TbCloudStorm} fontSize={size} />}

    {variant == '13d' && <Icon as={TbSnowflake} fontSize={size} />}
    {variant == '13n' && <Icon as={TbSnowflake} fontSize={size} />}

    {variant == '50d' && <Icon as={TbMist} fontSize={size} />}
    {variant == '50n' && <Icon as={TbMist} fontSize={size} />}
  </>
);

export default WeatherIcon;
