import { configureStore } from "@reduxjs/toolkit";
import { AdminSlice, Slice, TeacherSlice } from "./slice";

export default configureStore({
  reducer:{
    primarySlice: Slice.reducer,
    admin: AdminSlice.reducer,
    teacher: TeacherSlice.reducer
  }
})