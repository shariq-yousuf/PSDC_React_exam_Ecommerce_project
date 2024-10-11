import { nanoid } from "nanoid"
import { useDispatch } from "react-redux"
import { ProductType } from "../utils/types/types"
import { addCost } from "../state/slices/costSlice"
import { addToCart } from "../state/slices/cartSlice"

const useAddToCart = () => {
  const dispatch = useDispatch()

  const addProductToCart = (product: ProductType) => {
    const productWithShoppingId = {
      ...product,
      shoppingId: nanoid(),
    }

    dispatch(addCost(product.price))
    dispatch(addToCart(productWithShoppingId))
  }

  return addProductToCart
}

export default useAddToCart
