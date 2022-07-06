import React from 'react'
import Header from '../Header/Header'
import CartItems from '../CartItems/CartItems'

const Layout = () => {
  return (
    <div>
      <Header />
      <CartItems />
      <h1>Total: 0</h1>
    </div>
  )
}

export default Layout