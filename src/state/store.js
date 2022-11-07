import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";
import productsReducer from "./products";
import { loadState } from "../utils/browserStorage";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState: loadState(),
});

export default store;
