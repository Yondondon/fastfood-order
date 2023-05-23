import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { OrderItemType } from '../../utils/types';

export interface ordersState {
  ordersList: OrderItemType[];
}

const initialState: ordersState = {
  ordersList: []
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: { 
    addItemToOrdersList: (state, action: PayloadAction<number>) => {
      state.ordersList.push({
        orderNumber: action.payload,
        status: 'in-progress',
      });
    },
    swapOrderToReady: (state, action: PayloadAction<number>) => {
      state.ordersList[action.payload].status = 'ready';
    }
  }
});

export const {
  addItemToOrdersList,
  swapOrderToReady,
} = ordersSlice.actions;

export const ordersListSelect = (state: RootState) => state.orders.ordersList;

export default ordersSlice.reducer;