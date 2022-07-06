import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Header.css'
import {Button} from 'semantic-ui-react'
import cartActions from '../../Store/cartSlice'

const Header = () => {

  // const count = useSelector((state) => state.cart.totalQuantity)

   const dispatch = useDispatch()

   const handleClick = () => {
    dispatch(cartActions.showCart())
   }

  return (
    <div className='header-container'>
      <Button color='orange' onClick={handleClick}>
       CartItems
      </Button>
    </div>
  )
}

export default Header