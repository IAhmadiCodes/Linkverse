import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ inputs }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
      console.log("user successfull loged to the account...");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
