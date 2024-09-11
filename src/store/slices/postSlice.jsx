import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "../thunks/posts/addPost";
import { fetchPosts } from "../thunks/posts/fetchPosts";
import { removePost } from "../thunks/posts/removePost";
import { fetchProfilePosts } from "../thunks/posts/fetchProfilePosts";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(addPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(removePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.filter((post) => {
        return post.id !== action.payload.id;
      });
    });
    builder.addCase(removePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchProfilePosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfilePosts.fulfilled, (state, action) => {
      console.log("USER DATA FETCHED SUCCESSFULLY", action.payload);
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchProfilePosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const postReducer = postSlice.reducer;
