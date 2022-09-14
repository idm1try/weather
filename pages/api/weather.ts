import type { NextApiRequest, NextApiResponse } from 'next';

async function Weather(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.location) {
    return res.status(400).json({
      message: 'Cannot fetch weather information without a location query.',
    });
  }

  try {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req?.query?.location}&units=metric&appid=${process.env.WEATHER_API_KEY}`;

    const weather = await fetch(baseUrl);
    const forecast = await weather.json();

    if (Object.keys(forecast).length) {
      return res.status(200).json(forecast);
    } else {
      return res.status(500).json({ message: 'Cannot fetch weather data.' });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export default Weather;
