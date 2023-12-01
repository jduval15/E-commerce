import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from "../store/slices/products.slice";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/Home/ProductCard";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import '../components/style/Home.css'


const Home = () => {

  const [ nameValue, setNameValue ] = useState('')
  const [ categorySelected, setCategorySelected  ] = useState('all')
  const [ priceRange, setPriceRange ] = useState({
    from: 0,
    to: Infinity
  })

//! traemos la informacion del store
  const products = useSelector( (store) => store.products )

  //console.log(products);

//! creamos un dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])

  const inputName = useRef()

  const handleInputName = () => {
    setNameValue(inputName.current.value.tolowerCase().trim())
  }

  const callBackFilter = (product) => {
    //! filter for name
    const filterName = product.title.toLowerCase().includes(nameValue)
    //! filter for category
    const filterCategory = categorySelected === 'all' ? true : categorySelected === product.category.id
    //! filter for price
    const price = + product.price
    const filterPrice = priceRange.from <= price && price <= priceRange.to
    return filterName && filterCategory && filterPrice
  }

  //console.log(products);
  //console.log(categorySelected);
  //console.log(priceRange);

  return (
    <div>
      <input ref={inputName} onChange={handleInputName} type="text" />
      <div>
        <h2>Filters</h2>
        < FilterPrice 
          setPriceRange = { setPriceRange }
        />
        < FilterCategory 
          setCategorySelected = { setCategorySelected }
        />
      </div>
      <div className="product-container">
        {
          products?.filter(callBackFilter).map(productInfo => (
            <ProductCard 
              key = { productInfo.id }
              product = { productInfo }
              
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home