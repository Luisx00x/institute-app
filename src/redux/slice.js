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
    allGrades: []
  },
  reducers: {
    setAllGrades: (state, action) => {
      state.allGrades = action.payload;
    }
  }
});

export const { setUser } = Slice.actions;

export const { setAllGrades } = AdminSlice.actions;