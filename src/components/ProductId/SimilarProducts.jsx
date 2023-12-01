import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ProductCard from "../Home/ProductCard"
import '../style/SimilarProducts.css'


const SimilarProducts = ({ categoryId, idProduct }) => {

    const [  productsByCategory, getProductsByCategory ] = useFetch()

    useEffect(() => {
        if(categoryId) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`
            getProductsByCategory(url)
        }
    }, [categoryId])

//console.log(productsByCategory)

    return (
    <article className="similar">
        <h2 className="similar__title">Find Similar Products</h2>
        <div className="product-container">
            {
                productsByCategory?.filter(product => product.id !== idProduct).map((product) =>(
                    < ProductCard 
                        key = { product.id }
                        product = { product }
                    />
                ))
            }
        </div>
    </article>
    )
}

export default SimilarProducts