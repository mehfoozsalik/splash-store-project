import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../components/Products/FeaturedProducts'

export default function Home() {
  return (
    <>
      <Hero>
        <Link to='/login' className='btn btn-primary btn-hero'>
          Get Started
        </Link>
      </Hero>
      <FeaturedProducts />
    </>
  )
}
