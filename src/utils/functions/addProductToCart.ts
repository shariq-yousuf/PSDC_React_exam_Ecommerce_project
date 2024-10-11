import { nanoid } from "nanoid"
import { useDispatch } from "react-redux"
import { addCost } from "../../state/slices/costSlice"
import { addToCart } from "../../state/slices/cartSlice"
import { ProductType } from "../types/types"

const addProductToCart = (product: ProductType) => {
  const dispatch = useDispatch()

  const productWithShoppingId = {
    ...product,
    shoppingId: nanoid(),
  }

  dispatch(addCost(product.price))
  dispatch(addToCart(productWithShoppingId))
}

export default addProductToCart
