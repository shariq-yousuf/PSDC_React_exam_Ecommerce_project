import { useEffect, useState } from "react"
import API_URL from "../../config/api"
import Product from "./Product"
import { ProductType } from "../../utils/types/types"
import getData from "../../utils/functions/getData"
import useAddToCart from "../../hooks/useAddToCart"

const Products = () => {
  const [productsData, setProductsData] = useState([])
  const addProductToCart = useAddToCart()

  useEffect(() => {
    getData(API_URL, setProductsData)
  }, [])

  return (
    <div className="container mx-auto bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Featured Products
      </h1>
      {/* <!-- Product Grid --> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Product Card --> */}
        {productsData.map((product: ProductType) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={() => addProductToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
