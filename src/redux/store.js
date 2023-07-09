import { configureStore } from "@reduxjs/toolkit";
import { AdminSlice, Slice } from "./slice";

export default configureStore({
  reducer:{
    primarySlice: Slice.reducer,
    admin: AdminSlice.reducer
  }
})