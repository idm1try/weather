import { TbDroplet, TbSunrise, TbSunset, TbWind } from 'react-icons/tb';
import { formatSpeed, formatTemperature, formatTime } from 'lib/formatters';
import useWeather from 'lib/useWeather';
import WeatherIcon from './WeatherIcon';
import { useHotkeys } from '@mantine/hooks';

const CurrentConditions = () => {
  const { isLoading, weather, units, setUnits } = useWeather();

  function toggleUnits() {
    setUnits(units == 'us' ? 'metric' : 'us');
  }

  useHotkeys([['f', () => toggleUnits()]]);

  return (
    <div>
      {!isLoading && (
        <div>
          <div className='flex justify-between'>
            <div>
              <div className='text-2xl font-bold capitalize'>{weather.weather[0].description}</div>
              <div
                className='cursor-pointer text-6xl font-bold leading-normal text-teal-600 transition-colors duration-500 hover:text-teal-700 active:text-teal-700/80 dark:text-teal-300 dark:hover:text-teal-400 dark:active:text-teal-400/80'
                onClick={toggleUnits}
              >
                {formatTemperature(units, weather.main.temp)}
              </div>
              {formatTemperature(units, weather.main.feels_like) !==
                formatTemperature(units, weather.main.temp) && (
                <div className='text-lg font-bold'>
                  Feels Like: {formatTemperature(units, weather.main.feels_like)}
                </div>
              )}
              {formatTemperature(units, weather.main.temp_max) !=
                formatTemperature(units, weather.main.temp_min) && (
                <div className='text-lg text-gray-500'>
                  High: {formatTemperature(units, weather.main.temp_max)} Low:{' '}
                  {formatTemperature(units, weather.main.temp_min)}
                </div>
              )}
            </div>
            <div className='hidden text-lg min-[370px]:block'>
              <WeatherIcon size={128} variant={weather.weather[0].icon} />
            </div>
          </div>
          <div className='my-5 rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50'>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
              <div>
                <div className='flex justify-between'>
                  <div>
                    <TbWind className='mr-1 mb-1 inline-block' />
                    <b>Wind</b>
                  </div>
                  <div>{formatSpeed(units, weather.wind.speed)}</div>
                </div>
                <hr className='border-top mt-2 border-gray-800' />
              </div>
              <div>
                <div className='flex justify-between'>
                  <div>
                    <TbDroplet className='mr-1 mb-1 inline-block' />
                    <b>Humidity</b>
                  </div>
                  <div>{weather.main.humidity}%</div>
                </div>
                <hr className='border-top mt-2 border-gray-800' />
              </div>
              <div>
                <div className='flex justify-between'>
                  <div>
                    <TbSunrise className='mb-1 mr-1 inline-block' />
                    <b>Sunrise</b>
                  </div>
                  <div>{formatTime(units, weather.sys.sunrise)}</div>
                </div>
                <hr className='border-top mt-2 border-gray-800 md:hidden' />
              </div>
              <div>
                <div className='flex justify-between'>
                  <div>
                    <TbSunset className='mb-1 mr-1 inline-block' />
                    <b>Sunset</b>
                  </div>
                  <div>{formatTime(units, weather.sys.sunset)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentConditions;
