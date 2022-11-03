import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user'
import searchReducer from './search'
import productsReducer from './products'

const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    products: productsReducer 
  },
});

export default store;