import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steper: {
    activeStep: 0,
    tableDatas: [],
  },
};

const steperlice = createSlice({
  name: "steper",
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      var { activeStep } = action.payload;
      state.steper.activeStep = activeStep;
    },

    setTableData: (state, action) => {
      var { tableDatas } = action.payload;
      state.steper.tableDatas = tableDatas;
    },
    updateTableData: (state, action) => {
      var { rowIndex, name, value } = action.payload;
      const newData = [...state.steper.tableDatas];
      newData[rowIndex] = {
        ...newData[rowIndex],
        [name]: value,
      };
      state.steper.tableDatas = newData;
    },
  },
  extraReducers(builder) {},
});
export const { setActiveStep, setTableData, updateTableData } =
  steperlice.actions;
export const selectTableDatas = (state) => state.steper.steper.tableDatas;
export const selectActiveStep = (state) => state.steper.steper.activeStep;
export default steperlice.reducer;
