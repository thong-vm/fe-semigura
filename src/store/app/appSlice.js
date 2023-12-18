import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMsg: (state, action) => {
      const { msg } = action.payload;
      state.msg = msg;
    },
  },
  extraReducers(builder) {},
});
export const { setMsg } = appSlice.actions;
export const selectMsg = (state) => state.app.msg;
export default appSlice.reducer;
