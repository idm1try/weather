import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => (
  <>
    <Head>
      <title>Page not found | Weather</title>
    </Head>
    <div>
      <h1 className='mb-5 text-4xl font-bold'>404</h1>
      <p className='mb-5'>Oops! Page not found</p>
      <Link
        href='/'
        className='underline decoration-neutral-300 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-neutral-400 active:decoration-neutral-500 dark:decoration-neutral-700 dark:hover:decoration-neutral-500 dark:active:decoration-neutral-400'
      >
        Go to home
      </Link>
    </div>
  </>
)

export default NotFound
