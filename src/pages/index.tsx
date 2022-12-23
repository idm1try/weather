import CurrentConditions from '@/components/current-conditions'
import Search from '@/components/search'
import useWeather from '@/lib/useWeather'

const Weather = () => {
  const { isLoading, weather } = useWeather()

  return (
    <div>
      <Search />
      {!isLoading && (
        <div>
          {weather.cod == '404' ? (
            <div className='mt-12'>
              <h1 className='mb-5 text-3xl font-bold'>City Not Found</h1>
              <p className='text-neutral-600 dark:text-neutral-400'>
                The city you&apos;re looking for does not seem to exist
              </p>
            </div>
          ) : (
            <div className='mt-6'>
              {!weather.message ? (
                <CurrentConditions />
              ) : (
                <h1 className='mt-12 text-3xl font-bold'>Enter City</h1>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Weather
