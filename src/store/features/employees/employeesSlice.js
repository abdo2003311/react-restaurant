import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    deliveryEmployees: [],
  },
  reducers: {
    setEmployees: (state, { payload: { employees } }) => {
      state.deliveryEmployees = employees;
    },
    deleteStorageEmployee: (state, { payload: { order } }) => {
      state.deliveryEmployees.splice(order, 1);
    },
    updateStorageEmployee: (state, { payload: { order, employee } }) => {
      state.deliveryEmployees[order] = employee;
    },
    createStorageEmployee: (state, { payload: { employee } }) => {
      state.deliveryEmployees.push(employee);
    },
    completedOrder: (state, { payload: { employee } }) => {
      for (let i = 0; i < state.deliveryEmployees.length; i++) {
        if (state.deliveryEmployees[i].username === employee.username) {
          state.deliveryEmployees[i].unCompletedOrders.pop();
          state.deliveryEmployees[i].completedOrders.push(1);
          break;
        }
      }
    },
  },
});

export const {
  completedOrder,
  createStorageEmployee,
  updateStorageEmployee,
  deleteStorageEmployee,
  setEmployees,
} = employeesSlice.actions;

export default employeesSlice;
