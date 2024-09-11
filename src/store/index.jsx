import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { userReducer } from "./slices/userSlice";
import { postReducer } from "./slices/postSlice";
import { formReducer, changeText, changeFile, reset } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    posts: postReducer,
    form: formReducer,
  },
});

export { store, changeText, changeFile, reset };

// auth
export * from "./thunks/auth/signupUser";
export * from "./thunks/auth/LoginUser";
export * from "./thunks/auth/signoutUser";

// user
export * from "./thunks/user/fetchUser";
export * from "./thunks/posts/fetchProfilePosts";

// post
export * from "./thunks/posts/addPost";
export * from "./thunks/posts/fetchPosts";
export * from "./thunks/posts/removePost";
