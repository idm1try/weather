import Head from 'next/head'

const Meta = () => (
  <Head>
    <meta name='msapplication-TileColor' content='#171717' />
    <meta name='theme-color' content='#171717' />
    <meta name='description' content='View your weather' />
    <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
    <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />

    <meta property='og:type' content='website' />
    <meta property='og:title' content='Weather' />
    <meta property='og:description' content='View your weather' />
    <meta property='og:url' content='https://weather.idm1try.ru/' />
    <meta property='og:image' content='https://weather.idm1try.ru/og.png' />
    <meta name='twitter:image' content='https://weather.idm1try.ru/og.png' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content='Weather' />
    <meta name='twitter:site' content='@idm1try' />
    <meta name='twitter:creator' content='@idm1try' />
    <meta name='darkreader-lock' />
    <title>Weather</title>
  </Head>
)

export default Meta
