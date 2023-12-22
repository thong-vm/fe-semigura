import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Batch } from "../../services/api/batch/batchApi";
import { setMsg } from "../app/appSlice";

const initialState = {
  batchs: undefined,
};

export const fetchBatch = createAsyncThunk(
  "batchs",
  async (value, { rejectWithValue, dispatch }) => {
    try {
      const { result, error } =  await Batch.getAll();
      if (error) {
        dispatch(setMsg({ msg: "ERROR_GET_ALL_BATCH" }));
        return rejectWithValue(error);
      }
      return result;
    } catch (error) {
      dispatch(setMsg({ msg: error.message }));
      return rejectWithValue(error.message);
    }
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
