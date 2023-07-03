import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    price: 0,
    pizzaChoices: [],
    candyChoices: [],
    cheesecakeChoices: [],
    coffeeChoices: [],
    extraChoices: [],
    iceCreamChoices: [],
    juiceChoices: [],
    pieChoices: [],
    sauceChoices: [],
    drinkChoices: [],
    wineChoices: [],
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
    updatePizzaChoices: (state, action) => {
      const { _id, choices, price } = action.payload;
      const itemIndex = state.pizzaChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.pizzaChoices[itemIndex].choices = choices;
        state.pizzaChoices[itemIndex].price = price;
      } else {
        state.pizzaChoices.push({ _id, choices, price });
      }

      console.log("slice: " + choices);
    },
    updateCandyChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.candyChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.candyChoices[itemIndex].choices = choices;
      } else {
        state.candyChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateCheescakeChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.cheesecakeChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.cheesecakeChoices[itemIndex].choices = choices;
      } else {
        state.cheesecakeChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateCoffeeChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.coffeeChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.coffeeChoices[itemIndex].choices = choices;
      } else {
        state.coffeeChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateExtraChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.extraChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.extraChoices[itemIndex].choices = choices;
      } else {
        state.extraChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateIceCreamChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.iceCreamChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.iceCreamChoices[itemIndex].choices = choices;
      } else {
        state.iceCreamChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateJuiceChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.juiceChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.juiceChoices[itemIndex].choices = choices;
      } else {
        state.juiceChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updatePieChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.pieChoices.findIndex((item) => item._id === _id);

      if (itemIndex !== -1) {
        state.pieChoices[itemIndex].choices = choices;
      } else {
        state.pieChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateSauceChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.sauceChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.sauceChoices[itemIndex].choices = choices;
      } else {
        state.sauceChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateDrinkChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.drinkChoices.findIndex(
        (item) => item._id === _id
      );

      if (itemIndex !== -1) {
        state.drinkChoices[itemIndex].choices = choices;
      } else {
        state.drinkChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    updateWineChoices: (state, action) => {
      const { _id, choices } = action.payload;
      const itemIndex = state.wineChoices.findIndex((item) => item._id === _id);

      if (itemIndex !== -1) {
        state.wineChoices[itemIndex].choices = choices;
      } else {
        state.wineChoices.push({ _id, choices });
      }

      console.log("slice: " + choices);
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  addProduct,
  updatePizzaChoices,
  updateCandyChoices,
  updateCheescakeChoices,
  updateCoffeeChoices,
  updateDrinkChoices,
  updateExtraChoices,
  updateIceCreamChoices,
  updateJuiceChoices,
  updatePieChoices,
  updateSauceChoices,
  updateWineChoices,
  reset,
} = cartSlice.actions;
export default cartSlice.reducer;
