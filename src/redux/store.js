import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: []
  },
  filters: {
    name: ""
  }
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export store = configureStore({
  reducer: rootReducer,
})