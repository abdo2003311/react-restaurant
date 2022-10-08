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
    updateOrder: (state, { payload: { order } }) => {
      state.orders = state.orders.map((item) => {
        if (item._id === order._id) {
          item = order;
        }
        return item;
      });
    },
  },
});

export const { setOrders, removeOrder, updateOrder } = ordersSlice.actions;
export default ordersSlice;
