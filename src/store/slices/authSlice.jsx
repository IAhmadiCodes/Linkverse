import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "../thunks/auth/signupUser";
import { loginUser } from "../thunks/auth/LoginUser";
import { signoutUser } from "../thunks/auth/signoutUser";

const authSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    isLoading: false,
    isAuthenticated: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(signoutUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = null;
      state.isAuthenticated = false;
    });
    builder.addCase(signoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
