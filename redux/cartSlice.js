import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    choices: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    updateChoices: (state, action) => {
      state.choices = action.payload;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, updateChoices, reset } = cartSlice.actions;
export default cartSlice.reducer;
