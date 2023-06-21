import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { _id, name, img, price, choices } = action.payload;
      const cartItem = {
        _id,
        name,
        img,
        price,
        choices: choices || [],
      };

      state.products.push(cartItem);
      state.quantity += 1;
      state.price += price;
    },
    removeProduct: (state, action) => {
      const { itemId } = action.payload;
      state.products = state.products.filter((item) => item._id !== itemId);
    },
    updateItemChoices: (state, action) => {
      const { itemId, choices } = action.payload;
      const item = state.products.find((item) => item._id === itemId);
      if (item) {
        item.choices = choices.slice();
      }
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addProduct, updateItemChoices, reset } = cartSlice.actions;
export default cartSlice.reducer;
