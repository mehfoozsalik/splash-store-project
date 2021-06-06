import React from 'react'
import ProductList from './ProductList'
import { ProductContext } from '../../context/products'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

export default function PageProduct() {
  const { sorted, page, changePage } = React.useContext(ProductContext)
  console.log(sorted[page])
  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />
        {sorted.length > 1 && (
          <article className='pagination-buttons'>
            {page > 0 && (
              <button
                className='prev-page-btn'
                onClick={() => changePage(page - 1)}
              >
                <FaAngleDoubleLeft />
              </button>
            )}

            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              )
            })}
            {page < sorted.length - 1 && (
              <button
                className='next-page-btn'
                onClick={() => changePage(page + 1)}
              >
                <FaAngleDoubleRight />
              </button>
            )}
          </article>
        )}
      </>
    )
  } else {
    return (
      <h3 className='search-errors'>
        unfortunetly your search query didnt match to any product
      </h3>
    )
  }
}
