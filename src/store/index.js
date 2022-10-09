import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import cartsSilce from "./features/carts/cartsSilce";
import darkModeSlice from "./features/darkMode/darkModeSlice";
import employeesSlice from "./features/employees/employeesSlice";
import leftToRight from "./features/leftToRight/leftToRight";
import mealsSlice from "./features/meals/mealsSlice";
import ordersSlice from "./features/orders/ordersSlice";

let store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
    cart: cartsSilce.reducer,
    orders: ordersSlice.reducer,
    auth: authSlice.reducer,
    leftToRight: leftToRight.reducer,
    darkMode: darkModeSlice.reducer,
    meals: mealsSlice.reducer,
  },
});

export default store;
