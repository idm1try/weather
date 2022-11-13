import { formatTemperature, formatTime } from 'lib/formatters';
import useWeather from 'lib/useWeather';
import Spinner from './Spinner';
import WeatherIcon from './WeatherIcon';

const Forecast = () => {
  const { isLoadingForecast, forecast, units } = useWeather();

  return (
    <div>
      {isLoadingForecast ? (
        <Spinner className='mx-auto my-20' />
      ) : (
        <div className='grid grid-cols-2 gap-3 text-center md:grid-cols-4'>
          {forecast?.list?.map((forecast, index: number) => {
            return (
              <div className='rounded-lg bg-gray-50 p-2 dark:bg-gray-800/50' key={index}>
                <div className='font-bold'>{formatTime(units, forecast.dt)}</div>
                <div>{formatTemperature(units, forecast.main.temp)}</div>
                <WeatherIcon
                  size={100}
                  variant={forecast.weather[0].icon}
                  className='mx-auto my-2'
                />
                <div className='font-bold capitalize'>{forecast.weather[0].description}</div>
                {formatTemperature(units, forecast.main.feels_like) !=
                formatTemperature(units, forecast.main.temp) ? (
                  <div className='text-gray-500'>
                    Feels Like: {formatTemperature(units, forecast.main.feels_like)}
                  </div>
                ) : (
                  <br />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Forecast;
