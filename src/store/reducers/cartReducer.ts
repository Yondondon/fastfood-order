import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { OrderItemType } from '../../utils/types';

export interface cartState {
  lastOrderNumber: number;
  currentOrder: OrderItemType[];
}

const initialState: cartState = {
  lastOrderNumber: 0,
  currentOrder: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    addItemToOrder: (state, action: PayloadAction<OrderItemType>) => {
      state.currentOrder.push(action.payload);
    },
    changeCartItemQuantity: (state, action: PayloadAction<OrderItemType[]>) => {
      state.currentOrder = action.payload;
    }
  }
});

export const {
  addItemToOrder,
  changeCartItemQuantity,
} = cartSlice.actions;

export const cartCurrentOrderSelect = (state: RootState) => state.cart.currentOrder;

export default cartSlice.reducer;