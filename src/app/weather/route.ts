export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const location = searchParams.get('location') || ''
  const data = searchParams.get('data') || ''

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/${data}?q=${location}&units=metric&cnt=8&appid=${process.env.WEATHER_API_KEY}`,
    { next: { revalidate: 1200 } },
  )

  const forecast = await weather.json()

  return new Response(JSON.stringify(forecast), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}
