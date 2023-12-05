import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { prepareMoromiMock } from "../../mock/prepareMoromi";
const BASE_URL = "http://localhost:8000/bmds";
// const logUp = 30;
// const logDown = 20;
const initialState = {
  prepareMoromis: prepareMoromiMock,
};

export const fetchPrepareMoromi = createAsyncThunk(
  " prepareMoromi/fetchPrepareMoromi",
  async () => {
    return [];
  }
);

export const deleteBmd = createAsyncThunk(
  "prepareMoromi/deletePrepareMoromi",
  async (initialPrepareMoromi) => {
    const { id } = initialPrepareMoromi;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response?.status === 200) return initialPrepareMoromi;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);
const prepareMoromiSlice = createSlice({
  name: "prepareMoromi",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { prepareMoromis } = action.payload;
      state.prepareMoromis = prepareMoromis;
    },
    addToList: (state, action) => {
      var { prepareMoromi } = action.payload;
      state.prepareMoromis = [...state.prepareMoromis, prepareMoromi];
    },
    updatePrepareMoromi: (state, action) => {
      var { id, changes } = action.payload;
      var prepareMoromi = state.prepareMoromis.find(
        (element) => element.id === id
      );
      Object.keys(changes).forEach(
        (key) => (prepareMoromi[key] = changes[key])
      );
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.prepareMoromis = state.prepareMoromis.filter(
        (element) => element.id !== id
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPrepareMoromi.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.prepareMoromis = action.payload;
    });
  },
});
export const { setList, addToList, updatePrepareMoromi, deleteItem } =
  prepareMoromiSlice.actions;
export default prepareMoromiSlice.reducer;
export const selectAllPrepareMoromi = (state) =>
  state.prepareMoromi.prepareMoromis;
