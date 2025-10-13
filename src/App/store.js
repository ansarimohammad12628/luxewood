import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Feature/userSlice.js";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
