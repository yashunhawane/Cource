import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    changeLogin: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeLogin } = loginSlice.actions;
export default loginSlice.reducer;
