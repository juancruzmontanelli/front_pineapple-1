import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");

const initialState = []

export default createReducer(initialState, {
  [setProducts]: (state, action) => action.payload,
});