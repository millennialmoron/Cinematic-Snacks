// reducers.js
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
// import userReducer from './userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  //   user: userReducer,
});

export default rootReducer;
