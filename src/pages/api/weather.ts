import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const location = searchParams.get('location') || ''
  const data = searchParams.get('data') || ''

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/${data}?q=${location}&units=metric&cnt=8&appid=${process.env.WEATHER_API_KEY}`
  )

  const forecast = await weather.json()

  return new Response(JSON.stringify(forecast), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}
