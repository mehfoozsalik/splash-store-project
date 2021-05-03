import React, { Children } from 'react'

export default function Hero({ children }) {
  return (
    <div className='hero'>
      <div className='banner'>
        <h1> Fashion Era </h1>
        <p>Amazing Choices...</p>
        {children}
      </div>
    </div>
  )
}
