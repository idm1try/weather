'use client'

import { useLocalStorage } from 'react-use'
import useSWR from 'swr'
import { WeatherData } from './types'

async function fetcher(url: string) {
  return await fetch(url).then(res => res.json())
}

export default function useWeather(): WeatherData {
  const [location, setLocation] = useLocalStorage<string>('location')
  const { data, error } = useSWR(
    `/weather?location=${location}&data=weather`,
    fetcher,
  )
  const { data: forecastData, error: forecastError } = useSWR(
    `/weather?location=${location}&data=forecast`,
    fetcher,
  )

  return {
    weather: data,
    forecast: forecastData,
    isLoadingForecast: !forecastData && !forecastError,
    isLoading: !data && !error,
    isError: error && forecastError,
    location,
    setLocation,
  }
}
