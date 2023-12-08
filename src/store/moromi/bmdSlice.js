import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { bmdMock, bmdStandardLineMock } from "../../mock/bmd";
const BASE_URL = "http://localhost:8000/bmds";

const initialState = {
  bmds: bmdMock,
  standardLines: bmdStandardLineMock,
};

export const fetchBmd = createAsyncThunk("bmds/fetchBmd", async () => {
  return [];
});

export const deleteBmd = createAsyncThunk(
  "bmd/deleteBmd",
  async (initialMBmd) => {
    const { id } = initialMBmd;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response?.status === 200) return initialMBmd;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);
const bmdSlice = createSlice({
  name: "bmd",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { bmds } = action.payload;
      state.bmds = bmds;
    },
    addToList: (state, action) => {
      var { bmd } = action.payload;
      state.bmds = [bmd, ...state.bmds];
    },
    updateBmd: (state, action) => {
      var { id, changes } = action.payload;
      var bmd = state.bmds.find((element) => element.id === id);
      Object.keys(changes).forEach((key) => (bmd[key] = changes[key]));
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.bmds = state.bmds.filter((element) => element.id !== id);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBmd.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.bmds = action.payload;
    });
  },
});
export const { setList, addToList, updateBmd, deleteItem } = bmdSlice.actions;
export const selectAllBmd = (state) => state.bmd.bmds;
export const selectAllStandardLines = (state) => state.bmd.standardLines;
export default bmdSlice.reducer;
