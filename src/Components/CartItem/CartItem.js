import React from 'react'
import './CartItem.css'
import { useDispatch } from 'react-redux/es/exports'

const CartItem = ({id, img, name, price}) => {

    const dispatch = useDispatch();

    const addToCart = () => {
      dispatch(addToCart({
          id,
          name,
          price,
        })
    )}

  return (
    <div className='item'>
        <img src={img} alt='' />
        <h2>{price}/-</h2>
        <button onClick={addToCart}>AddToCart</button>
    </div>
  )
}

export default CartItem