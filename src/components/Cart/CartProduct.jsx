import { useDispatch } from 'react-redux'
import { deleteProductFromCartThunk } from '../../store/slices/cart.slice'

const CartProduct = ({ product }) => {

  const dispatch = useDispatch()

const handleDelete = () => {
  dispatch(deleteProductFromCartThunk(product.id))
}


  return (
    <section>
      <header>
        <img src={product.product.images[0].url} alt="" />
      </header>
      <article>
        <h3>{product.product.title}</h3>
        <span>{product.quantity}</span>
        <div>
          <span>Price</span>
          <span>{product.product.price}</span>
        </div>
      </article>
      <button onClick={handleDelete}>
        <i className='bx bxs-trash'></i>
      </button>
    </section>
  )
}

export default CartProduct