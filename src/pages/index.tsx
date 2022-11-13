import CityNotFound from 'components/CityNotFound';
import CurrentConditions from 'components/CurrentConditions';
import Forecast from 'components/Forecast';
import GoToTopButton from 'components/GoToTopButton';
import Search from 'components/Search';
import Spinner from 'components/Spinner';
import useWeather from 'lib/useWeather';

const Weather = () => {
  const { isLoading, weather } = useWeather();

  return (
    <div>
      <Search />
      {isLoading ? (
        <Spinner className='mx-auto my-40' />
      ) : (
        <div>
          {weather.cod == '404' ? (
            <CityNotFound />
          ) : (
            <div className='mt-6'>
              {!weather.message ? (
                <div>
                  <CurrentConditions />
                  <Forecast />
                </div>
              ) : (
                <h1 className='my-20 text-center text-4xl font-bold'>Enter City</h1>
              )}
            </div>
          )}
        </div>
      )}
      <GoToTopButton />
    </div>
  );
};

export default Weather;
