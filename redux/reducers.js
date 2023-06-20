import { combineReducers } from "redux";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  //   user: userReducer,
});

export default rootReducer;
