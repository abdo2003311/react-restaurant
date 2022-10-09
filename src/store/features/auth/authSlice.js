import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    verifyLogin(state, { payload }) {
      state.isLoggedIn = payload.isLoggedIn;
    },
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout, verifyLogin } = authSlice.actions;
export default authSlice;
