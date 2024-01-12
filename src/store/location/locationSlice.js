import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMsg } from "../app/appSlice";
import { Location } from "../../services/api/location/locationApi";

const initialState = {
  locations: undefined,
  selectedLocation: undefined,
};

export const fetchLocation = createAsyncThunk(
  "locations",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { result, error } = await Location.getAll();
      if (error) {
        dispatch(setMsg({ msg: "ERROR_GET_ALL_LOCATION" }));
        return rejectWithValue(error);
      }
      return result;
    } catch (error) {
      dispatch(setMsg({ msg: error.message }));
      return rejectWithValue(error.message);
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { locations } = action.payload;
      state.locations = locations;
    },
    setSelectedLocation: (state, action) => {
      var { selectedLocation } = action.payload;
      state.selectedLocation = selectedLocation;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.locations = action.payload;
    });
  },
});
export const { setList, setSelectedLocation } = locationSlice.actions;
export const selectAllLocations = (state) => state.location.locations;
export const selectSelectedLocation = (state) =>
  state.location.selectedLocation;
export default locationSlice.reducer;
