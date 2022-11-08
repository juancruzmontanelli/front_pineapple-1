import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";
import searchReducer from "./search";
import productsReducer from "./products";
import { loadState } from "../utils/browserStorage";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer,
  preloadedState: loadState(),
});

export default store;
