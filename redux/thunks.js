import { addProduct } from "./cartSlice";

export const addToCart = (product, price) => async (dispatch, getState) => {
  dispatch(addProduct({ ...product, price }));
};
