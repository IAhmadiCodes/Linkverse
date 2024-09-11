import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/user/fetchUser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: {
      fullName: "",
      userName: "",
      email: "",
      profilePic: "",
      bio: "",
      posts: [],
      followers: [],
      following: [],
      bookmarkedPosts: [],
    },
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const userData = action.payload[0] || {};
      state.user = {
        ...state.user,
        ...userData,
      };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
