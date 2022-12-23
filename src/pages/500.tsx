import Head from 'next/head'
import React from 'react'

const NotFound = () => (
  <>
    <Head>
      <title>Internal Server Error | idm1try</title>
    </Head>
    <div>
      <h1 className='mb-5 animate-in text-4xl font-bold'>500</h1>
      <p
        className='mb-5 animate-in'
        style={{ '--index': 1 } as React.CSSProperties}
      >
        Oops! Internal Server Error
      </p>
    </div>
  </>
)

export default NotFound
