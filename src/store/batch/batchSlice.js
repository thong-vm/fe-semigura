import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Batch } from "../../services/api/batch/batchApi";

const initialState = {
  batchs: undefined,
};

export const fetchBatch = createAsyncThunk(
  "batchs",
  async () => {
    const { result, error } = await Batch.getAll();
    return !error ? result : console.log("batchs.getAll: ", error);
  }
);

const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { batchs } = action.payload;
      state.batchs = batchs;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBatch.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.batchs = action.payload;
    });
  },
});
export const { setList } = batchSlice.actions;
export const selectAllBatchs = (state) => state.batch.batchs;
export default batchSlice.reducer;
