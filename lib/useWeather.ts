import useSWR from 'swr';
import { WeatherData } from './types';
import { useLocalStorage } from '@mantine/hooks';

async function fetcher(url: string) {
  return await fetch(url).then(res => res.json());
}

export default function useWeather(): WeatherData {
  const [location, setLocation] = useLocalStorage({ key: 'location', defaultValue: 'New York' });
  const [units, setUnits] = useLocalStorage({ key: 'units', defaultValue: 'metric' });
  const { data, error } = useSWR(`/api/weather?location=${location}&data=weather`, fetcher);
  const { data: forecastData, error: forecastError } = useSWR(
    `/api/weather?location=${location}&data=forecast`,
    fetcher
  );

  return {
    weather: data,
    forecast: forecastData,
    isLoadingForecast: !forecastData && !forecastError,
    isLoading: !data && !error,
    isError: error && forecastError,
    location,
    setLocation,
    units,
    setUnits,
  };
}
