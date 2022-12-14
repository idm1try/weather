import {
  TbCloud,
  TbCloudRain,
  TbCloudStorm,
  TbMist,
  TbMoonStars,
  TbSnowflake,
  TbSun,
} from 'react-icons/tb'
import { WiDayCloudy, WiNightAltCloudy } from 'react-icons/wi'

interface WeatherIconProps {
  size: number
  variant: string
  className?: string
}

const WeatherIcon = ({ variant, size, className }: WeatherIconProps) => (
  <div>
    {variant === '01d' && <TbSun size={size} className={className} />}
    {variant === '01n' && <TbMoonStars size={size} className={className} />}

    {variant === '02d' && <WiDayCloudy size={size} className={className} />}
    {variant === '02n' && (
      <WiNightAltCloudy size={size} className={className} />
    )}

    {variant === '03d' && <TbCloud size={size} className={className} />}
    {variant === '03n' && <TbCloud size={size} className={className} />}

    {variant === '04d' && <TbCloud size={size} className={className} />}
    {variant === '04n' && <TbCloud size={size} className={className} />}

    {variant === '09d' && <TbCloudRain size={size} className={className} />}
    {variant === '09n' && <TbCloudRain size={size} className={className} />}

    {variant === '10d' && <TbCloudRain size={size} className={className} />}
    {variant === '10n' && <TbCloudRain size={size} className={className} />}

    {variant === '11d' && <TbCloudStorm size={size} className={className} />}
    {variant === '11n' && <TbCloudStorm size={size} className={className} />}

    {variant === '13d' && <TbSnowflake size={size} className={className} />}
    {variant === '13n' && <TbSnowflake size={size} className={className} />}

    {variant === '50d' && <TbMist size={size} className={className} />}
    {variant === '50n' && <TbMist size={size} className={className} />}
  </div>
)

export default WeatherIcon
