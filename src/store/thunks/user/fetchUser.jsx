import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ uid }, { rejectWithValue }) => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const filteredData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return filteredData;
      }

      return filteredData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// console.log("Number of documents fetched:", querySnapshot.size);
// console.log("This is the user data: ", filteredData);
