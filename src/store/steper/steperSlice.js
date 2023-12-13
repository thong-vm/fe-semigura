import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steper: {
    data:[]
  },
};

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
  },
});
export const { setList, addToList, updateBmd, deleteItem } = bmdSlice.actions;
export const selectAllBmd = (state) => state.bmd.bmds;
export const selectAllStandardLines = (state) => state.bmd.standardLines;
export default bmdSlice.reducer;
