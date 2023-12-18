import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlice";
import ekisuReducer from "./moromi/ekisuSlice";
import prepareMoromiReducer from "./moromi/prepareMoromiSlice";
import arukoruReducer from "./moromi/arukoruSlice";
import authReducer from "./auth/authSlice";
import steperReducer from "./steper/steperSlice";
import batchReducer from "./batch/batchSlice";
import appReducer from "./app/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    moromi: moromisReducer,
    bmd: bmdReducer,
    ekisu: ekisuReducer,
    prepareMoromi: prepareMoromiReducer,
    arukoru: arukoruReducer,
    steper: steperReducer,
    batch: batchReducer,
  },
});

export default store;
