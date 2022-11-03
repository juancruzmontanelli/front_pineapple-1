import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";
import searchReducer from "./search";
import productsReducer from "./products";
import { loadState } from "../utils/browserStorage";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    search: searchReducer,
    products: productsReducer,
  },
  preloadedState: loadState(),
});

export default store;
