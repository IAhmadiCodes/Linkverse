import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async ({ inputs }, { rejectWithValue }) => {
    try {
      console.log("User is signing up...");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );

      const user = userCredential.user;
      const userProfile = {
        uid: user.uid,
        fullName: inputs.fullName,
        userName: inputs.userName,
        email: user.email,
        profilePic: "",
        bio: "",
        posts: [],
        followers: [],
        following: [],
        bookmarkedPosts: [],
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "users", user.uid), userProfile);
      console.log("user account successfully created...");

      return { ...userProfile, uid: user.uid };
    } catch (error) {
      console.error("Error signing up:", error.message);
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);
