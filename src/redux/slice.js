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

export const { setUser } = Slice.actions;