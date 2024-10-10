import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  subtotal: number;
}

const initialState: InitialState = {
  subtotal: 0,
};

export const costSlice = createSlice({
  name: "cost",
  initialState,
  reducers: {
    addCost: (state, action: PayloadAction<number>) => {
      state.subtotal += action.payload;
    },
    removeCost: (state, action: PayloadAction<number>) => {
      state.subtotal -= action.payload;
    },
  },
});

export const { addCost, removeCost } = costSlice.actions;

export default costSlice.reducer;
