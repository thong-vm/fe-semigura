import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { bmdMock } from "../../mock/bmd";
const BASE_URL = "http://localhost:8000/bmds";
const standard = 50;
const initialState = {
  bmd: bmdMock.map((element) => {
    return { ...element, standard: standard };
  }),
};

export const fetchBmd = createAsyncThunk("bmd/fetchBmd", async () => {
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
      var { bmd } = action.payload;
      state.bmd = bmd;
    },
    addToList: (state, action) => {
      var { moromi } = action.payload;
      state.bmd = [moromi, ...state.bmd];
    },
    updateBmd: (state, action) => {
      var { id, changes } = action.payload;
      var moromi = state.bmd.find((m) => m.id === id);
      Object.keys(changes).forEach((key) => (moromi[key] = changes[key]));
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.bmd = state.bmd.filter((element) => element.id !== id);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBmd.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.bmd = action.payload;
    });
  },
});
export const { setList, addToList, updateBmd, deleteItem } =
  bmdSlice.actions;
export default bmdSlice.reducer;
export const selectAllBmd = (state) => state.bmd.bmd;
