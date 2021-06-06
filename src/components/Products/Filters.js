import React from 'react'
import { ProductContext } from '../../context/products'

const Filters = () => {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted,
  } = React.useContext(ProductContext)
  return (
    <section className='filters-section'>
      <h2 className='section-title'>search product</h2>
      <form className='filters-form' action=''>
        <div>
          <div className='form-group'>
            <label htmlFor='search'>search term</label>
            <input
              type='text'
              id='search'
              name='search'
              value={search}
              onChange={updateFilters}
            />
          </div>
          {/*select category*/}
          <div className='form-group'>
            <label htmlFor='category'>Category</label>
            <select
              name='category'
              id='category'
              className='form-control'
              value={category}
              onChange={updateFilters}
            >
              <option value='all'>all</option>
              <option value='styles'>styles</option>
              <option value='sales'>sales</option>
              <option value='kurta'>kurta</option>
            </select>
          </div>
          {/*end is here select category*/}
          {/*free shiping*/}
          <div className='form-group'>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor='shipping'>free shipping</label>
          </div>
          {/*end here free shiping*/}
        </div>
        <div className='price-group'>
          <p>price</p>
          <label>
            <input
              type='radio'
              name='price'
              value='all'
              checked={price === 'all'}
              onChange={updateFilters}
            />
            all
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='0'
              checked={price === 0}
              onChange={updateFilters}
            />
            $0 - $300
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='300'
              checked={price === 300}
              onChange={updateFilters}
            />
            $300 - $600
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='300'
              checked={price === 600}
              onChange={updateFilters}
            />
            Over $600
          </label>
        </div>
      </form>
      <h6>total product : {sorted.flat().length}</h6>
    </section>
  )
}

export default Filters
