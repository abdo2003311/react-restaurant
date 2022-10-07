import { createSlice } from "@reduxjs/toolkit";

let ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, { payload: { orders } }) => {
      state.orders = orders;
    },
    removeOrder: (state, { payload: { order } }) => {
      state.orders = state.orders.filter((item) => item._id !== order._id);
    },
  },
});

export const { setOrders, removeOrder } = ordersSlice.actions;
export default ordersSlice;
