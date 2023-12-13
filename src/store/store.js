import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlice";
import ekisuReducer from "./moromi/ekisuSlice";
import prepareMoromiReducer from "./moromi/prepareMoromiSlice";
import arukoruReducer from "./moromi/arukoruSlice";
import authReducer from "./auth/authSlice";
import steperReducer from "./steper/steperSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    moromi: moromisReducer,
    bmd: bmdReducer,
    ekisu: ekisuReducer,
    prepareMoromi: prepareMoromiReducer,
    arukoru: arukoruReducer,
    steper: steperReducer,
  },
});

export default store;
