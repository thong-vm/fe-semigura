import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMsg } from "../app/appSlice";
import { Factory } from "../../services/api/factory/factoryApi";

const initialState = {
  factorys: undefined,
  selectedFactory: undefined,
};

export const fetchFactory = createAsyncThunk(
  "factorys",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { result, error } = await Factory.getAll();
      if (error) {
        dispatch(setMsg({ msg: "ERROR_GET_ALL_FACTORY" }));
        return rejectWithValue(error);
      }
      return result;
    } catch (error) {
      dispatch(setMsg({ msg: error.message }));
      return rejectWithValue(error.message);
    }
  }
);

const factorySlice = createSlice({
  name: "factory",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { factorys } = action.payload;
      state.factorys = factorys;
    },
    setSelectedFactory: (state, action) => {
      var { selectedFactory } = action.payload;
      state.selectedFactory = selectedFactory;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFactory.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.factorys = action.payload;
      state.selectedFactory = state.factorys[0];
    });
  },
});
export const { setList, setSelectedFactory } = factorySlice.actions;
export const selectAllFactorys = (state) => state.factory.factorys;
export const selectSelectedFactory = (state) => state.factory.selectedFactory;
export default factorySlice.reducer;
