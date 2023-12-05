import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlice";

export const store = configureStore({
  reducer: {
    moromi: moromisReducer,
    bmd: bmdReducer,
  },
});

export default store;
