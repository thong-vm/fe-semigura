import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  batchs: undefined,
};
const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { batchs } = action.payload;
      state.batchs = batchs;
    },
  },
  extraReducers(builder) {},
});
export const { setList } = batchSlice.actions;
export const selectAllBatchs = (state) => state.batch.batchs;
export default batchSlice.reducer;
