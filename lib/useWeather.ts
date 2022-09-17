import useSWR from 'swr';
import { WeatherData } from './types';
import { useLocalStorage } from '@mantine/hooks';

async function fetcher(url: string) {
  return await fetch(url).then(res => res.json());
}

export default function useWeather(): WeatherData {
  const [location, setLocation] = useLocalStorage({ key: 'location', defaultValue: 'New York' });
  const [units, setUnits] = useLocalStorage({ key: 'units', defaultValue: 'metric' });
  const { data, error } = useSWR(`/api/weather?location=${location}`, fetcher);

  return {
    weather: data,
    isLoading: !error && !data,
    isError: error,
    location,
    setLocation,
    units,
    setUnits,
  };
}
