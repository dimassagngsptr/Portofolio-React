import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./regist";

export const store = configureStore({
   reducer: {
      user: userSlice,
   },
});
