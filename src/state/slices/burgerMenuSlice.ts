import { createSlice } from "@reduxjs/toolkit"

export const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState: false,
  reducers: {
    toggle: (state) => !state,
  },
})

export const { toggle } = burgerMenuSlice.actions

export default burgerMenuSlice.reducer
