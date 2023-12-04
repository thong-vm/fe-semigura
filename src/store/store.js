import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlide";

export const store = configureStore({
  reducer: {
    moromis: moromisReducer,
    bmd: bmdReducer
  },
});

export default store;
