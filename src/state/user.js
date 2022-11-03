import { createAction, createReducer } from "@reduxjs/toolkit";
export const setUser = createAction("SET_USER");
export const logOut = createAction("LOG_OUT");
export const addProducts = createAction("ADD_PRODUCTS");
export const removeProducts = createAction("REMOVE_PRODUCTS");


const initialState = {
  id: null,
  name: null,
  email: null,
  loggedIn: false,
  products: [],
};

export default createReducer(initialState, {
  [setUser]: (state, action) => {
    return { ...state, name: action.payload, email: action.payload, id:null, loggedIn: true};
  },
  [logOut]: (state, action) => {
    return { ...state, name: null, email: null, id: null, loggedIn: false, products: [] };
  },

  [addProducts]: (state, action) => {
    if (state.products.find((prod) => prod.id === action.payload.id)) {
      return state;
    }
    return { ...state, products: [...state.products, action.payload] };
  },
  [removeProducts]: (state, action) => {
    return {
      ...state,
      products: state.products.filter((prod) => prod.id !== action.payload.id),
    };
  },
});
