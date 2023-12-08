import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { moromiMock } from "../../mock/moromi";
const BASE_URL = "http://localhost:8000/moromis";

const initialState = {
  moromis: moromiMock,
};

export const fetchMoromis = createAsyncThunk(
  "moromis/fetchMoromis",
  async () => {
    return [];
  }
);

export const deleteMoromi = createAsyncThunk(
  "moromi/deleteMoromi",
  async (initialMoromi) => {
    const { id } = initialMoromi;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response?.status === 200) return initialMoromi;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);
const moromiSlice = createSlice({
  name: "moromi",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { moromis } = action.payload;
      state.moromis = moromis;
    },
    addToList: (state, action) => {
      var { moromi } = action.payload;
      state.moromis = [moromi, ...state.moromis];
    },
    updateMoromi: (state, action) => {
      var { id, changes } = action.payload;
      var moromi = state.moromis.find((element) => element.id === id);
      Object.keys(changes).forEach((key) => (moromi[key] = changes[key]));
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.moromis = state.moromis.filter((element) => element.id !== id);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMoromis.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.moromis = action.payload;
    });
  },
});
export const { setList, addToList, updateMoromi, deleteItem } =
  moromiSlice.actions;
export const selectAllMoromis = (state) => state.moromi.moromis;
export default moromiSlice.reducer;
