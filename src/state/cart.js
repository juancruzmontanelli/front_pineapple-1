import { createAction, createReducer } from "@reduxjs/toolkit";

export const setCart = createAction("SET_CART");
export const addProduct = createAction("ADD_PRODUCT");
export const removeProduct = createAction("REMOVE_PRODUCT");
export const setQuantity = createAction("SET_QUANTITY");
export const incrementQuantity = createAction("INCREMENT_QUANTITY");
export const decrementQuantity = createAction("DECREMENT_QUANTITY");

export default createReducer([], {
  [setCart]: (state, action) => {
    return state;
  },
  [addProduct]: (state, action) => {
    if (state.find((prod) => prod.id === action.payload.id)) {
      return state;
    }
    return [...state, { ...action.payload, quantity: 1 }];
  },
  [removeProduct]: (state, action) => {
    return state.filter((prod) => prod.id !== action.payload);
  },
  [setQuantity]: (state, action) => {
    const item = state.find((prod) => prod.id === action.payload.id);
    item.quantity = action.payload.quantity;
  },
  [incrementQuantity]: (state, action) => {
    const item = state.find((prod) => prod.id === action.payload);
    item.quantity++;
  },
  [decrementQuantity]: (state, action) => {
    const item = state.find((prod) => prod.id === action.payload);
    if (item.quantity === 1) {
      item.quantity = 1;
    } else {
      item.quantity--;
    }
  },
});
