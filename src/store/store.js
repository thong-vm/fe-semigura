import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlice";
import ekisuReducer from './moromi/ekisuSlice'
import prepareMoromiReducer from './moromi/prepareMoromiSlice'
import arukoruReducer from './moromi/arukoruSlice'

export const store = configureStore({
  reducer: {
    moromi: moromisReducer,
    bmd: bmdReducer,
    ekisu: ekisuReducer,
    prepareMoromi: prepareMoromiReducer,
    arukoru: arukoruReducer
  },
});

export default store;
