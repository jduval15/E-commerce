import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getTokenConfig";

//! estado global carrito de compra

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCart: ( currentValue, action ) => [ ...currentValue, action.payload ],
        removeFromCart: ( currentValue, action ) => {
            return currentValue.filter(product => product.id !== action.payload )
        },

        setCart: ( currentValue, action ) => action.payload
    }
})

export const { addCart, removeFromCart, setCart } = cartSlice.actions

export default cartSlice.reducer

const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

export const getCartThunk = () => (dispatch) => {
    const url = `${URL}`
    axios.get(url, getConfigToken() )
    .then(res=> dispatch(setCart(res.data)))
    .catch(err=> console.log(err))
}

export const addProductCartThunk = (productId, quantity = 1) => (dispatch) => {
    const url = `${URL}`
    const data = {productId, quantity}

    axios.post(url, data, getConfigToken())
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
}

export const deleteProductFromCartThunk = (id) => (dispatch) => {
    const url = `${URL}/${id}`
    
    axios.delete(url, getConfigToken())
    .then(res=> {
        console.log(res.data)
        dispatch(removeFromCart(id))
    })

    .catch(err=> console.log(err))
}