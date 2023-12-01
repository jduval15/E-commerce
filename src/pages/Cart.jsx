import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProduct from "../components/Cart/CartProduct"
import getConfigToken from '../utils/getTokenConfig'
import axios from "axios"


const Cart = () => {

  const cart = useSelector(store => store.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  console.log(cart)

  const totalPriceCart = cart.reduce((acc, currentValues) => {
    const price = Number(currentValues.product.price)
    return acc + price * currentValues.quantity
  }, 0)
  

  const purchases = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, '', getConfigToken())
    .then(res=> {
      console.log(res.data)
      dispatch(setCart([]))
    })
    .catch(err=> console.log(err))
  }


  return (
    <div>
      <h1>Cart</h1>
      <div>
        {
          cart.map(product => (
            < CartProduct
            key = { product.id }
            product = { product }
            />
          ))
        }
      </div>
      <hr />
      <footer>
        <span>Total:</span>
        <span>{totalPriceCart}</span>
        <button onClick={purchases}>Checkout</button>
      </footer>
    </div>
  )
}

export default Cart