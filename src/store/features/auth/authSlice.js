import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    verifyLogin(state, { payload }) {
      state.isLoggedIn = payload.isLoggedIn;
    },
    login(state, action) {
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout, verifyLogin } = authSlice.actions;
export default authSlice;
