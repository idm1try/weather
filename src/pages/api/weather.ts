import { WeatherResponse } from 'lib/types';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function weather(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const unsanitizedLocation = searchParams.get('location') || '';
  const unsanitizedData = searchParams.get('data') || '';

  const location = encodeURI(unsanitizedLocation);
  const data = encodeURI(unsanitizedData);

  if (!location) {
    return new Response(JSON.stringify({ error: 'No location provided.' }), {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  if (!data) {
    return new Response(JSON.stringify({ error: 'No data type provided.' }), {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  try {
    const baseUrl = `https://api.openweathermap.org/data/2.5/${data}?q=${location}&units=metric&cnt=8&appid=${process.env.WEATHER_API_KEY}`;

    const weather = await fetch(baseUrl);

    if (weather.status != 200) {
      return new Response(
        JSON.stringify({
          error: `${weather.statusText}`,
        }),
        {
          status: weather.status,
          statusText: weather.statusText,
        }
      );
    }

    const forecast = (await weather.json()) as WeatherResponse;

    if (!forecast) {
      return new Response(
        JSON.stringify({
          error: 'No forecast data.',
        }),
        {
          status: 400,
          statusText: 'Bad Request',
        }
      );
    }

    return new Response(JSON.stringify(forecast), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=1, stale-while-revalidate=59',
      },
      status: 200,
      statusText: 'OK',
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: `${error}` }), {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}
