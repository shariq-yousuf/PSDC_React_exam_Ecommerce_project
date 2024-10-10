import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../config/types";

interface ProductWithShoppingId extends Product {
  shoppingId: string;
}

const initialState: { cart: ProductWithShoppingId[] } = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductWithShoppingId>) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (product) => product.shoppingId !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
