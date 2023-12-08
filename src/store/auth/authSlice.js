import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../constants/store";
import LocalStorage from "../../services/localStorage/localStorage";
import { AuthLogin } from "../../services/api/auth/authApi";
const parseJwt = (token) => {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64"));
  } catch (e) {
    return {};
  }
};
const getRole = (token) => {
  console.log("token :", token);
  return token ? parseJwt(token) : "";
};
const initialState = {
  token: "",
  user: {},
  role: "",
  status: IDLE,
  error: "",
};

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (value, { rejectWithValue }) => {
    try {
      const { result, error } = await AuthLogin.post({
        account: value.username,
        password: value.password,
      });

      if (error) {
        console.log("AuthLogin error: ", error);
        return rejectWithValue(error);
      }
      return result;
    } catch (error) {
      console.error("Unexpected error in loginAsync thunk: ", error);
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      var { user, token } = action.payload;
      state.user.username = user.username;
      state.token = token;
      LocalStorage.set("token", token);
    },
    logout: (state) => {
      state.token = "";
      state.user = {};
      LocalStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.status = LOADING;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { token } = action.payload || {};
        state.status = SUCCEEDED;
        if (token && token != null) {
          state.token = token;
          state.role = getRole(token);
          LocalStorage.set("token", token);
        }
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const getAuthError = (state) => state.auth.error;
export const getAuthStatus = (state) => state.auth.status;
export default authSlice.reducer;
