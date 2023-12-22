import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMsg } from "../app/appSlice";
import { Lot } from "../../services/api/lot/lotApi";

const initialState = {
  lots: undefined,
};

export const fetchLot = createAsyncThunk(
  "lots",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { result, error } = await Lot.getAll();
      if (error) {
        dispatch(setMsg({ msg: "ERROR_GET_ALL_LOT" }));
        return rejectWithValue(error);
      }
      return result;
    } catch (error) {
      dispatch(setMsg({ msg: error.message }));
      return rejectWithValue(error.message);
    }
  }
);
const lotSlice = createSlice({
  name: "lot",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { lots } = action.payload;
      state.lots = lots;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLot.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.lots = action.payload;
    });
  },
});
export const { setList } = lotSlice.actions;
export const selectAllLots = (state) => state.lot.lots;
export default lotSlice.reducer;
