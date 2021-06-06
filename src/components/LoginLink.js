import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'
import { CartContext } from '../context/cart'
import { BiLogIn, BiLogOut } from 'react-icons/bi'

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext)
  const { clearCart } = React.useContext(CartContext)
  if (user.token) {
    return (
      <button
        className='login-btn'
        onClick={() => {
          userLogout()
          clearCart()
        }}
      >
        <BiLogOut className='icons' /> LogOut
      </button>
    )
  }

  return (
    <Link to='/login' className='iconslink'>
      <BiLogIn className='icons' />
      LogIn
    </Link>
  )
}
