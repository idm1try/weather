import WeatherInfo from '@/components/weather-info'
import Search from '@/components/search'
import useWeather from '@/lib/useWeather'

const Weather = () => {
  const { isLoading, weather } = useWeather()

  return (
    <div>
      <Search />
      {!isLoading && (
        <div>
          {!weather.message && weather.cod !== '404' && <WeatherInfo />}
        </div>
      )}
    </div>
  )
}

export default Weather
