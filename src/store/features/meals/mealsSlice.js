import { createSlice } from "@reduxjs/toolkit";

let mealsSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
  },
  reducers: {
    setMeals: (state, { payload: { meals } }) => {
      state.meals = meals;
    },
    deleteStorageMeal: (state, { payload: { order } }) => {
      state.meals.splice(order, 1);
    },
    updateStorageMeal: (state, { payload: { order, meal } }) => {
      state.meals[order] = meal;
    },
    createStorageMeal: (state, { payload: { meal } }) => {
      state.meals.push(meal);
    },
  },
});

export const {
  setMeals,
  updateStorageMeal,
  createStorageMeal,
  deleteStorageMeal,
} = mealsSlice.actions;
export default mealsSlice;
