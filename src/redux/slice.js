import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
  name: "PrimirySlice",
  initialState: {
    userLog: null
  },
  reducers: {
    setUser: (state, action) => {
      state.userLog = action.payload;
    }
  }
});

export const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    allGrades: [],
    Teachers: []
  },
  reducers: {
    setAllGrades: (state, action) => {
      state.allGrades = action.payload;
    },
    setTeachers: (state, action) => {
      state.Teachers = action.payload;
    }
  }
});

export const { setUser } = Slice.actions;

export const { setAllGrades, setTeachers } = AdminSlice.actions;