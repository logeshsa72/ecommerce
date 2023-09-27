import { createSlice } from "@reduxjs/toolkit";
import Product from "../../container/Product";

export const cartslice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.list = [...state.list, { ...payload, count:1}];
    },
    removeItem: (state, { payload }) => {
      const index = state.list.findIndex(
        (product) => product.id === payload.id
      );
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },
    modifyItem: (state, { payload }) => {
      const index = state.list.findIndex((product) => product.id === payload.id);
    
      if (index !== -1) {
        state.list[index].count = payload.count;
      }
    },

  },
});
export const { addItem, removeItem, modifyItem } = cartslice.actions;

export default cartslice.reducer;
