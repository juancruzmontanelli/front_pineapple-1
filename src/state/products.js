import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");
export const searchProducts = createAction("SEARCH_PRODUCTS");

const initialState = { products: [] };

export default createReducer(initialState, {
 [setProducts]: (state, action) => {
    return { ...state, products: [...state.products, action.payload] };
  },
  [searchProducts]: (state, action) => {return {...state, search: action.payload }}
});

