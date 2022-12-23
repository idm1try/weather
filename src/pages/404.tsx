import cn from '@/lib/classNames'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const NotFound = () => (
  <>
    <Head>
      <title>Page Not Found | idm1try</title>
    </Head>
    <div>
      <h1 className='mb-5 animate-in text-4xl font-bold'>404</h1>
      <p
        className='mb-5 animate-in'
        style={{ '--index': 1 } as React.CSSProperties}
      >
        Whoops, it looks like the page you were looking for doesn&apos;t exist!
      </p>
      <Link
        href='/'
        className={cn(
          'animate-in font-medium underline',
          'decoration-neutral-300 decoration-2',
          'underline-offset-4 transition-colors',
          'duration-300 hover:decoration-neutral-400',
          'dark:decoration-neutral-700 dark:hover:decoration-neutral-500'
        )}
        style={{ '--index': 2 } as React.CSSProperties}
      >
        Go to home
      </Link>
    </div>
  </>
)

export default NotFound
