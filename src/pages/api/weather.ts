import { NextApiRequest, NextApiResponse } from 'next'

async function weather(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.location) {
    return res.status(400).json({
      message: 'Cannot fetch weather information without a location query.',
    })
  }

  if (!req.query.data) {
    return res.status(400).json({
      message: 'Cannot fetch weather information without a data query.',
    })
  }

  try {
    const baseUrl = `https://api.openweathermap.org/data/2.5/${req?.query?.data}?q=${req?.query?.location}&units=metric&cnt=8&appid=${process.env.WEATHER_API_KEY}`

    const weather = await fetch(baseUrl)
    const forecast = await weather.json()

    if (Object.keys(forecast).length) {
      return res.status(200).json(forecast)
    } else {
      return res.status(500).json({ message: 'Cannot fetch weather data.' })
    }
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

export default weather
