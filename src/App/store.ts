import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/Quiz/slice";

export const store = configureStore({
  reducer: {
    appRedux: appSlice,
  },
});