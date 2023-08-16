import { Products } from "./components/Products"
import {products as initialProducts} from "./mocks/products.json"
import {useState, useContext} from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { FiltersContext } from "./context/filters"


function App() {
  const [products]=useState(initialProducts)
  const {filterProducts} = useFilters();
  const filteredProducts=filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
