import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { moromiMock } from "../../mock/moromi";
// import Moromi from "../../pages/moromi/Moromi";
const BASE_URL = "http://localhost:8000/moromis";

const initialState = {
  moromis: moromiMock,
};

// export const fetchMoromis = createAsyncThunk(
//   "moromis/fetchMoromis",
//   async () => {
//     const { result, error } = await Moromi.getAll();
//     return !error ? result : console.log("Moromi.getAll: ", error);
//   }
// );

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
const moromisSlice = createSlice({
  name: "moromis",
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
    updateList: (state, action) => {
      var { id, moromi } = action.payload;
      state.moromis = state.moromis.map((element) => {
        if (element.id === id) {
          return moromi;
        } else {
          return element;
        }
      });
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.moromis = state.moromis.filter((element) => element.id !== id);
    },
  },
  extraReducers(builder) {
    // builder.addCase(fetchMoromis.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   state.moromis = action.payload;
    //   console.log("state.moromi :", state.moromi);
    // });
  },
});
export const { setList, addToList, updateList, deleteItem } =
  moromisSlice.actions;
export const selectAllMoromis = (state) => state.moromis.moromis;
export default moromisSlice.reducer;
