import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMsg } from "../app/appSlice";
import { Tank } from "../../services/api/tank/tankApi";

const initialState = {
  tanks: undefined,
  selectedTank: undefined,
};

export const fetchTank = createAsyncThunk(
  "tanks",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { result, error } = await Tank.getAll();
      if (error) {
        dispatch(setMsg({ msg: "ERROR_GET_ALL_TANK" }));
        return rejectWithValue(error);
      }
      return result;
    } catch (error) {
      dispatch(setMsg({ msg: error.message }));
      return rejectWithValue(error.message);
    }
  }
);

const tankSlice = createSlice({
  name: "tank",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { tanks } = action.payload;
      state.tanks = tanks;
    },
    setSelectedTank: (state, action) => {
      var { selectedTank } = action.payload;
      state.selectedTank = selectedTank;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTank.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tanks = action.payload;
    });
  },
});
export const { setList, setSelectedTank } = tankSlice.actions;
export const selectAllTanks = (state) => state.tank.tanks;
export const selectSelectedTank = (state) => state.tank.selectedTank;
export default tankSlice.reducer;
