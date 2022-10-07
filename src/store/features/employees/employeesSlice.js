import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    deliveryEmployees: [],
  },
  reducers: {
    setEmployees: (state, { payload: {employees} }) => {
      state.deliveryEmployees = employees;
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

export const { completedOrder, setEmployees } = employeesSlice.actions;

export default employeesSlice;
