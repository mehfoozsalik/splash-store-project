import React from 'react'
import Product from './Product'

export default function ProductList({ title, products }) {
  return (
    <section className='section'>
      <h1 className='section-title'>{title}</h1>
      <div className='products-center'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
