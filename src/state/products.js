import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");
export const searchProducts = createAction("SEARCH_PRODUCTS");
export const filterBrandProducts = createAction("FILTER_BRAND");
export const filterPriceProducts = createAction("FILTER_PRICE");

const initialState = {products: [], search: [], filterBrand: [], filterPrice: []}

export default createReducer(initialState, {
  [setProducts]: (state, action) => {return {...state, products: action.payload }},
  [searchProducts]: (state, action) => {return {...state, search: action.payload }},
  [filterBrandProducts]: (state, action) => {return {...state, filterBrand: action.payload }},
  [filterPriceProducts]: (state, action) => {return {...state, filterPrice: action.payload }}
});



