import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <section className='empty-cart'>
      <h2>Empty Cart...</h2>
      <Link to='/products' className='btn btn-primary'>
        {' '}
        fill it
      </Link>
    </section>
  )
}
