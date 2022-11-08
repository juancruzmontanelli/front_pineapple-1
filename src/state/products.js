import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");

const initialState = { products: [] };

export default createReducer(initialState, {
  [setProducts]: (state, action) => {
    return { ...state, products: [...state.products, action.payload] };
  },
});
