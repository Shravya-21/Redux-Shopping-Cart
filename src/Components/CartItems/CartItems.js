import React from 'react'
import CartItem from '../CartItem/CartItem'
import { Grid } from 'semantic-ui-react'
const Books = [
  {
    id: 1,
    name: 'ReactJs',
    price: 500,
    img: 'https://m.media-amazon.com/images/I/415rZYEFq-S._SL500_.jpg',
  },
  {
    id: 2,
    name: 'Java',
    price: 500,
    img: 'https://m.media-amazon.com/images/I/514axA2lwpL.jpg',
  },
  {
    id: 3,
    name: 'Mongodb',
    price: 270,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51HVkpvByZS.jpg',
  },
  {
    id: 4,
    name: 'Nodejs',
    price: 1000,
    img: 'https://freefrontend.com/assets/img/nodejs-books/nodejsbasics.jpg',
  },
  {
    id: 5,
    name: 'Spring Boot',
    price: 600,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71OTrXcix4L.jpg'
  },
]

const CartItems = () => {
  return (
    <Grid stackable columns={5}>
      {Books.map((book) => (
        <Grid.Column key={book.id}>
          <CartItem
            id={book.id}
            name={book.name}
            price={book.price}
            quantity={book.quantity}
            img={book.img}
          />
        </Grid.Column>
      ))}
    </Grid>
  )
}

export default CartItems