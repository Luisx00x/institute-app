import { configureStore } from "@reduxjs/toolkit";
import { AdminSlice, ParentSlice, Slice, StudentSlice, TeacherSlice, TutorSlice } from "./slice";

export default configureStore({
  reducer:{
    primarySlice: Slice.reducer,
    admin: AdminSlice.reducer,
    teacher: TeacherSlice.reducer,
    student: StudentSlice.reducer,
    parent: ParentSlice.reducer,
    tutor: TutorSlice.reducer
  }
})