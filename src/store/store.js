import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlide";
import ekisuReducer from './moromi/ekisuSlice'

export const store = configureStore({
  reducer: {
    moromis: moromisReducer,
    bmd: bmdReducer,
    ekisu: ekisuReducer
  },
});

export default store;
