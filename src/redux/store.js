import { configureStore } from "@reduxjs/toolkit";
import initialContacts from "../data/contacts";

const initialState = {
  contacts: {
    items: initialContacts
  },
  filters: {
    name: ""
  }
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
})