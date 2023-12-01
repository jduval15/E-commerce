import { useState } from "react"
import { addProductCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from "react-redux"


const ProductInfo = ({ product }) => {

    const [ quantity, setQuantity ] = useState(1)
    
    const handleMinus = () => {
        if(quantity - 1 >= 1) {
            setQuantity(quantity - 1)
        }
    }

    const handlePlus = () => setQuantity(quantity + 1)

    const dispatch = useDispatch()

    const handleAddCart = () => {
        dispatch(addProductCartThunk(product.id, quantity))
    }


    return (

    <article className='product-info'>
    <h3>{product?.brand}</h3>
    <h2 className='product-info__title'>{product?.title}</h2>
    <p className='product-info__description'>{product?.description}</p>
    <footer className='product-info__footer'>
        <div className='product-info__price-container'>
            <span className='product-info__price-label'>Price</span>
            <span className='product-info__price-number'>{product?.price}</span>
        </div>
        <div className='counter'>
            <button className='counter__minus' onClick={handleMinus}>-</button>
            <div className='counter__quantity'>{quantity}</div>
            <button className='counter__plus' onClick={handlePlus}>+</button>
        </div>
            <button className='product-info__btn' onClick={handleAddCart}>Add to cart</button>
    </footer>
    </article>
    )
}

export default ProductInfo