import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user'
import searchReducer from './search'

const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});

export default store;