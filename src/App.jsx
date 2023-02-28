import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function useFilter() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters }

}


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilter()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header onChangeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
