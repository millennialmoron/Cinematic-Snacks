import { addProduct } from "./cartSlice";

export const addToCart =
  (product, price, selections) => async (dispatch, getState) => {
    dispatch(addProduct({ ...product, price, ...selections }));
  };
