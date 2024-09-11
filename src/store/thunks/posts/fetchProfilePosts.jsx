import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchProfilePosts = createAsyncThunk(
  "user/fetchProfilePosts",
  async ({ uid }, { rejectWithValue }) => {
    try {
      const q = query(collection(db, "posts"), where("uid", "==", uid));
      console.log("The user id...", q);
      const querySnapshot = await getDocs(q);

      console.log("Number of documents fetched:", querySnapshot.size);
      if (!querySnapshot.empty) {
        const filteredData = querySnapshot.docs.map((doc) => ({
          ...data.data(),
          id: doc.id,
        }));

        console.log("This is the user profile data: ", filteredData);
        return filteredData;
      } else {
        console.log("No documents have been found...");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
