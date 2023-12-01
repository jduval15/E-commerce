import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductId/ProductInfo"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SliderImg from "../components/ProductId/SliderImg"

//! peticion asincrona
const ProductId = () => {

  const { id } = useParams()

  const [ product, getProduct ] = useFetch()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    getProduct(url)
  }, [id])
  //console.log(product)

  return (
    //! props
    <div>
      < SliderImg product={product}/>
      < ProductInfo product={product}/>
      < SimilarProducts categoryId={product?.category.id} idProduct={product?.id} />
    </div>
  )
}

export default ProductId