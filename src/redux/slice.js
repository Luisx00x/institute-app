import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
  name: "PrimirySlice",
  initialState: {
    userLog: "null"
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
    test: "pruebaSlice"
  },
  reducers: {

  }
});

export const { setUser } = Slice.actions;