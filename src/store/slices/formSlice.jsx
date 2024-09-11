import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    postText: "",
    postFile: null,
  },
  reducers: {
    changeText(state, action) {
      state.postText = action.payload;
    },
    changeFile(state, action) {
      state.postFile = action.payload;
    },
    reset(state, action) {
      state.postText = "";
      state.postFile = null;
    },
  },
});

export const { changeText, changeFile, reset } = formSlice.actions;
export const formReducer = formSlice.reducer;
