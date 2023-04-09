'use client'

import { formatTemperature, formatTime } from '@/lib/formatters'
import useWeather from '@/lib/useWeather'
import { cn } from '@/lib/utils'

const Weather = () => {
  const { isLoading, weather, forecast, location, setLocation } = useWeather()

  return (
    <div>
      <input
        aria-label='Enter city'
        placeholder='Enter city'
        type='text'
        spellCheck='false'
        value={location}
        onChange={event => setLocation(event.target.value)}
        className={cn(
          'rounded-lg border border-crust bg-mantle',
          'py-2 px-4 capitalize text-subtext0 shadow-sm',
          'outline-none transition-all duration-300',
          'placeholder:text-overlay0 hover:text-subtext1',
          'focus:ring-2 ring-surface1 ring-offset-2 ring-offset-base',
        )}
      />
      {!isLoading && !weather.message && weather.cod !== '404' && (
        <div>
          <div className='mt-6'>
            <h2 className='text-xl font-bold capitalize'>
              {weather.weather[0].description}
            </h2>
            <h1 className='my-3 text-5xl font-bold'>
              {formatTemperature(weather.main.temp)}
            </h1>
            {formatTemperature(weather.main.feels_like)
                !== formatTemperature(weather.main.temp) && (
              <p className='mb-5 text-overlay0'>
                Feels Like: {formatTemperature(weather.main.feels_like)}
              </p>
            )}
          </div>
          <ul className='animated-list grid grid-cols-2'>
            <li className='pr-4 transition-all duration-300'>
              <div className='flex flex-col gap-1 py-3 sm:flex-row md:gap-9'>
                <span className='text-overlay0 sm:w-20'>
                  {formatTime(weather.sys.sunrise)}
                </span>
                <span className='font-medium'>Sunrise</span>
              </div>
            </li>
            <li className='pr-4 transition-all duration-300'>
              <div className='flex flex-col gap-1 py-3 sm:flex-row md:gap-9'>
                <span className='text-overlay0 sm:w-20'>
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
                  <span className='text-overlay0 sm:w-20'>
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

export default Weather
