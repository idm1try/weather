import { formatTemperature, formatTime } from '@/lib/formatters'
import useWeather from '@/lib/useWeather'
import { CSSProperties } from 'react'

const CurrentConditions = () => {
  const { isLoading, weather, forecast } = useWeather()

  return (
    <div>
      {!isLoading && (
        <div>
          <div className='animate-in' style={{ '--index': 1 } as CSSProperties}>
            <h2 className='text-xl font-bold capitalize'>
              {weather.weather[0].description}
            </h2>
            <h1 className='my-3 text-5xl font-bold'>
              {formatTemperature(weather.main.temp)}
            </h1>
            {formatTemperature(weather.main.feels_like) !==
              formatTemperature(weather.main.temp) && (
              <p className='mb-5 text-neutral-600 dark:text-neutral-400'>
                Feels Like: {formatTemperature(weather.main.feels_like)}
              </p>
            )}
          </div>
          <ul
            className='animated-list grid animate-in grid-cols-2'
            style={{ '--index': 2 } as CSSProperties}
          >
            <li className='pr-4 transition-all duration-300'>
              <div className='flex flex-col gap-1 py-3 sm:flex-row md:gap-9'>
                <span className='text-neutral-600 dark:text-neutral-400 sm:w-20'>
                  {formatTime(weather.sys.sunrise)}
                </span>
                <span className='font-medium'>Sunrise</span>
              </div>
            </li>
            <li className='pr-4 transition-all duration-300'>
              <div className='flex flex-col gap-1 py-3 sm:flex-row md:gap-9'>
                <span className='text-neutral-600 dark:text-neutral-400 sm:w-20'>
                  {formatTime(weather.sys.sunset)}
                </span>
                <span className='font-medium'>Sunset</span>
              </div>
            </li>
            {forecast?.list?.map(forecast => (
              <li
                key={forecast.dt}
                className='pr-4 transition-all duration-300'
              >
                <div className='flex flex-col gap-1 py-3 sm:flex-row md:gap-9'>
                  <span className='text-neutral-600 dark:text-neutral-400 sm:w-20'>
                    {formatTime(forecast.dt)}
                  </span>
                  <span className='font-medium sm:w-12'>
                    {formatTemperature(forecast.main.temp)}
                  </span>
                  <span className='capitalize'>
                    {forecast.weather[0].description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CurrentConditions
