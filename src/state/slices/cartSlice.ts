import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProductType } from "../../utils/types/types"

interface ProductWithShoppingId extends ProductType {
  shoppingId: string
}

const initialState: ProductWithShoppingId[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductWithShoppingId>) => {
      state.push(action.payload)
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.shoppingId !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
