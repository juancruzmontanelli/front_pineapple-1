import { createAction, createReducer } from "@reduxjs/toolkit";
export const setUser = createAction("SET_USER");
export const logOut = createAction("LOG_OUT");

const initialState = {
  name: null,
  email: null,
  loggedIn: false,
};

export default createReducer(initialState, {
  [setUser]: (state, action) => {
    return {
      ...state,
      name: action.payload,
      email: action.payload,
      loggedIn: true,
    };
  },
  [logOut]: (state, action) => {
    return { ...state, name: null, email: null, loggedIn: false, products: [] };
  },
});
