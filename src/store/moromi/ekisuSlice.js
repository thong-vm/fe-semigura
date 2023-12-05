import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ekisuMock } from "../../mock/ekisu";
const BASE_URL = "http://localhost:8000/bmds";
const initialState = {
  ekisus: ekisuMock,
};

export const fetchEkisu = createAsyncThunk("ekisu/fetchEkisu", async () => {
  return [];
});

export const deleteBmd = createAsyncThunk(
  "ekisu/deleteEkisu",
  async (initialEkisu) => {
    const { id } = initialEkisu;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response?.status === 200) return initialEkisu;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);
const ekisuSlice = createSlice({
  name: "ekisu",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { ekisus } = action.payload;
      state.ekisus = ekisus;
    },
    addToList: (state, action) => {
      var { ekisu } = action.payload;
      state.ekisus = [...state.ekisus, ekisu];
    },
    updateEkisu: (state, action) => {
      var { id, changes } = action.payload;
      var ekisu = state.ekisus.find((element) => element.id === id);
      Object.keys(changes).forEach((key) => (ekisu[key] = changes[key]));
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.ekisus = state.ekisus.filter((element) => element.id !== id);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchEkisu.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.ekisus = action.payload;
    });
  },
});
export const { setList, addToList, updateEkisu, deleteItem } =
  ekisuSlice.actions;
export default ekisuSlice.reducer;
export const selectAllEkisus = (state) => state.ekisu.ekisus;
