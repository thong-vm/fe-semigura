import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlice";
import ekisuReducer from './moromi/ekisuSlice'

export const store = configureStore({
  reducer: {
    moromi: moromisReducer,
    bmd: bmdReducer,
    ekisu: ekisuReducer,
  },
});

export default store;
