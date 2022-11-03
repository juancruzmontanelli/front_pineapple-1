import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearch = createAction("SET_SEARCH");

const initialState = []

export default createReducer(initialState, {
  [setSearch]: (state, action) => action.payload,
});