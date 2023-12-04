import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";

export const store = configureStore({
  reducer: {
    moromis: moromisReducer,
  },
});

export default store;
