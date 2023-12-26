import { configureStore } from "@reduxjs/toolkit";
import moromisReducer from "./moromi/moromiSlice";
import bmdReducer from "./moromi/bmdSlice";
import ekisuReducer from "./moromi/ekisuSlice";
import prepareMoromiReducer from "./moromi/prepareMoromiSlice";
import arukoruReducer from "./moromi/arukoruSlice";
import authReducer from "./auth/authSlice";
import steperReducer from "./steper/steperSlice";
import appReducer from "./app/appSlice";
import lotReducer from "./lot/lotSlice";
import factoryReducer from "./factory/factorySlice";
import tankReducer from "./tank/tankSlice";
import locationReducer from "./location/locationSlice";

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
    lot: lotReducer,
    factory: factoryReducer,
    tank: tankReducer,
    location: locationReducer,
  },
});

export default store;
