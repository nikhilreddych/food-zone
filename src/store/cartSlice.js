import { createSlice } from "@reduxjs/toolkit";
import _ from "underscore";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurant: {},
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const indexOfItem = _.findIndex(state.items, {
        id: action.payload,
      });
      if (indexOfItem > -1) {
        state.items.splice(indexOfItem, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateRestaurantInfo: (state, action) => {
      state.restaurant = action.payload;
    },
    clearRestaurantInfo: (state) => {
      state.restaurant = {};
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  updateRestaurantInfo,
  clearRestaurantInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
