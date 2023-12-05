import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { arukoruExpectLineMock, arukoruMock } from "../../mock/arukoru";
const BASE_URL = "http://localhost:8000/bmds";
// const logUp = 30;
// const logDown = 20;
const initialState = {
  arukorus: arukoruMock,
  expectLine: arukoruExpectLineMock
};

export const fetchArukoru = createAsyncThunk(
  " arukoru/fetchArukoru",
  async () => {
    return [];
  }
);

export const deleteBmd = createAsyncThunk(
  "arukoru/deletePrepareMoromi",
  async (initialArukoru) => {
    const { id } = initialArukoru;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response?.status === 200) return initialArukoru;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);
const arukoruSlice = createSlice({
  name: "arukoru",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { arukorus } = action.payload;
      state.arukorus = arukorus;
    },
    addToList: (state, action) => {
      var { arukoru } = action.payload;
      state.arukorus = [...state.arukorus, arukoru];
    },
    updateEkisu: (state, action) => {
      var { id, changes } = action.payload;
      var arukoru = state.arukorus.find((element) => element.id === id);
      Object.keys(changes).forEach((key) => (arukoru[key] = changes[key]));
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.arukorus = state.arukorus.filter(
        (element) => element.id !== id
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchArukoru.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.arukorus = action.payload;
    });
  },
});
export const { setList, addToList, updateArukoru, deleteItem } = arukoruSlice.actions;

export const selectAllArukoru = (state) => state.arukoru.arukorus;
export const selectAllExpectLines = (state) => state.arukoru.expectLine;
export default arukoruSlice.reducer;
