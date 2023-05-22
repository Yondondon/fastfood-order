import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { OrderItemType } from '../../utils/types';

export interface ordersState {
  ordersList: OrderItemType[];
}

const initialState: ordersState = {
  ordersList: [
    {
      orderNumber: 1,
      status: 'in-progress',
    },
    {
      orderNumber: 2,
      status: 'in-progress',
    },
    {
      orderNumber: 3,
      status: 'ready',
    },
    {
      orderNumber: 4,
      status: 'ready',
    },
  ]
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: { 
    addItemToOrder: (state, action: PayloadAction) => {
      // state.currentOrder.push(action.payload);
    },
  }
});

export const {
  addItemToOrder,
} = ordersSlice.actions;

export const ordersListSelect = (state: RootState) => state.orders.ordersList;

export default ordersSlice.reducer;