import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { NewCartItemType } from '../../utils/types';

export interface cartState {
  currentOrderNumber: number;
  currentOrder: NewCartItemType[];
}

const initialState: cartState = {
  currentOrderNumber: 1,
  currentOrder: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    addItemToCart: (state, action: PayloadAction<NewCartItemType>) => {
      state.currentOrder.push(action.payload);
    },
    changeCartItemQuantity: (state, action: PayloadAction<{index: number; value: number}>) => {
      state.currentOrder[action.payload.index].quantity = action.payload.value;
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.currentOrder.splice(action.payload, 1);
    },
    resetCurrentOrder: (state) => {
      state.currentOrder = [];
    },
    changeCurrentOrderNumber: (state) => {
      state.currentOrderNumber = state.currentOrderNumber + 1;
    },
  }
});

export const {
  addItemToCart,
  changeCartItemQuantity,
  removeCartItem,
  resetCurrentOrder,
  changeCurrentOrderNumber,
} = cartSlice.actions;

export const cartCurrentOrderSelect = (state: RootState) => state.cart.currentOrder;
export const cartCurrentOrderNumberSelect = (state: RootState) => state.cart.currentOrderNumber;

export default cartSlice.reducer;