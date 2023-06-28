import { createSlice } from "@reduxjs/toolkit";

//needs to be fixed so that there is an array for choices from each child component and an update action for each one.

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    price: 0,
    choices: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const { _id, name, img, price } = action.payload;
      const cartItem = {
        _id,
        name,
        img,
        price,
      };

      state.products.push(cartItem);
      state.quantity += 1;
      state.price += price;
    },
    removeProduct: (state, action) => {
      const { itemId } = action.payload;
      state.products = state.products.filter((item) => item._id !== itemId);
    },
    //will need to update and fix this to be replicated for each individual choice type, so this needs to become pizza
    updateItemChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.choices.findIndex((item) => item._id === _id);

      if (itemIndex !== -1) {
        state.choices[itemIndex].choices = choices;
      } else {
        state.choices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addProduct, updateItemChoices, reset } = cartSlice.actions;
export default cartSlice.reducer;
