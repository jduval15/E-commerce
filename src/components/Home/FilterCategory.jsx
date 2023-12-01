import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'


const FilterCategory = ({ setCategorySelected }) => {
//! reutilizar useFetch

const [ categories, getCategories ] = useFetch()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    getCategories(url)
  }, [])

  //console.log(categories);

  const handleCategory = (id) => {
    setCategorySelected(id)
  }

  return (
    <section>
        <h3>Categorie</h3>
        <hr />
        <ul>
          <li onClick={() => handleCategory ('all')}>All Categorie</li>
          {
            categories?.map(category => (
              <li onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
            ))
          }
        </ul>
    </section>
  )
}

export default FilterCategory