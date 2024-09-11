import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { doc } from "firebase/firestore";

export const removePost = createAsyncThunk(
  "posts/removePost",
  async ({ post }, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "posts", post.id));
      console.log("post successfully deleted!");
      return { id: post.id };
    } catch (error) {
      console.error("Error removing post:", error);
      return rejectWithValue(error.message);
    }
  }
);
