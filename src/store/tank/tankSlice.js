import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMsg } from "../app/appSlice";
import { Tank } from "../../services/api/tank/tankApi";

const initialState = {
  tanks: undefined,
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
  },
  extraReducers(builder) {
    builder.addCase(fetchTank.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tanks = action.payload;
    });
  },
});
export const { setList } = tankSlice.actions;
export const selectAllTanks = (state) => state.tank.tanks;
export default tankSlice.reducer;
