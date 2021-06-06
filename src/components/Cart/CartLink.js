import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cart'
import { BiCartAlt } from 'react-icons/bi'

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext)

  return (
    <div className='cart-link-container'>
      <Link to='/cart'>
        <BiCartAlt className='icons' />
      </Link>
      <span className='cart-link-total'>{cartItems}</span>
    </div>
  )
}
