import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from './user'
import searchReducer from './search'
import productsReducer from './products'


const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    search: searchReducer,
    products: productsReducer 
  },
});

export default store;
