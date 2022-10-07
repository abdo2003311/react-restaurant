import { createSlice } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
  name: "cart",
  initialState: {
    price: 0,
    meals: [{ quantity: 0, id: 0 }],
  },
  reducers: {
    init: (state, { payload: cart }) => {
      state.meals = cart.meals;
    },
    itemMount: (state, { payload: { price } }) => {
      state.price += price;
    },
    deleteItem: (state, { payload: { order, price } }) => {
      state.meals.splice(order, 1);
      state.price -= price;
    },
    changeItemsQuantity: (
      state,
      { payload: { quantity, mealId, oneMealPrice, price } }
    ) => {
      let mealIndex;
      for (let i = 0; i < state.meals.length; i++) {
        if (mealId == state.meals[i]._id) {
          mealIndex = i;
          break;
        }
      }
      state.price -= price;
      state.price += quantity * Number(oneMealPrice).toFixed(0);
      state.meals[mealIndex].quantity = quantity;
    },
  },
});

export const { deleteItem, changeItemsQuantity, init, itemMount } =
  cartsSlice.actions;

export default cartsSlice;
