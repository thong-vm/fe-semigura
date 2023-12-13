import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steper: {
    activeStep: 0,
    completed: {},
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
    setCompleted: (state, action) => {
      var { completed } = action.payload;
      state.steper.completed = completed;
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
export const { setActiveStep, setCompleted, setTableData, updateTableData } =
  steperlice.actions;
export const selectTableDatas = (state) => state.steper.steper.tableDatas;
export const selectActiveStep = (state) => state.steper.steper.activeStep;
export const selectCompleted = (state) => state.steper.steper.completed;
export default steperlice.reducer;
