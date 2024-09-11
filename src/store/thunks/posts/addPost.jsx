import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../config/firebase";

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ postText }, { rejectWithValue }) => {
    try {
      const post = {
        postText,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "posts"), post);

      return { id: docRef.id, ...post };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
