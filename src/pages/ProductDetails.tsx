import { useEffect, useState } from "react"
import API_URL from "../config/api"
import { useParams } from "react-router-dom"
import { ProductType } from "../utils/types/types"
import getData from "../utils/functions/getData"
import Details from "../components/Main/Details"

const productInitialState: ProductType = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
}

const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState<ProductType>(productInitialState)

  useEffect(() => {
    getData(`${API_URL}/${productId}`, setProduct)
  }, [])

  return <Details product={product} />
}

export default ProductDetails
