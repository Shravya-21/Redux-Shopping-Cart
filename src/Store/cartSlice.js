import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
           const newItem = action.payload;
           const existingItem = state.itemsList.find((item)=> item.id === newItem.id)

            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.Price
                })
            }

            console.log(state.itemsList);
        },
        
        removeFromCart() {

        },
        showCart(state, action) {
            state.showCart = true;
        },
    },
})

export const cartActions = cartSlice.actions

export default cartSlice