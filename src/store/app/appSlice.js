import { createSlice } from "@reduxjs/toolkit";
import * as NOTIFIES from "../../constants/notify";

const initialState = {
  msg: "",
  severity: undefined,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMsg: (state, action) => {
      const { msg } = action.payload;
      state.msg = msg;
      state.severity = NOTIFIES.ERROR;
    },
    closeMsg: (state, action) => {
      state.msg = "";
      state.severity = undefined;
    },
  },
  extraReducers(builder) {},
});
export const { setMsg, closeMsg } = appSlice.actions;
export const selectMsg = (state) => state.app.msg;
export const selectSeverity = (state) => state.app.severity;
export default appSlice.reducer;
