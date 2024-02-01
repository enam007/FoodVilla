import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      let removed = false;
      const stateAfterItemsRemoved = state.items.filter((item) => {
        if (item.card.info.id === action.payload && !removed) {
          removed = true;
          return false;
        }
        return true;
      });
      state.items = stateAfterItemsRemoved;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
