import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";

export const signoutUser = createAsyncThunk(
  "user/signoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      console.log("user successfully sign out...");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
