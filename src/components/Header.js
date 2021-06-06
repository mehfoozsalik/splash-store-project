import React from 'react'
import { NavLink } from 'react-router-dom'

import CartLink from './Cart/CartLink'
import { UserContext } from '../context/user'
import LoginLink from '../components/LoginLink'

export default function Header() {
  const { user } = React.useContext(UserContext)
  return (
    <header className='header'>
      <h1 className='logo'>
        Splash<span className='store'>Store</span>
      </h1>
      <nav>
        <ul>
          <div>
            <li>
              <NavLink to='/' className='nav'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className='nav'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/products' className='nav'>
                Products
              </NavLink>
            </li>
            {user.token && (
              <li>
                <NavLink to='./checkout'>CheckOut</NavLink>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  )
}
