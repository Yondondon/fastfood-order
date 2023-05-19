import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import foodCategorySlice from './reducers/foodCategoryReducer';
import cartSlice from './reducers/cartReducer';

export const store = configureStore({
  reducer: {
    foodCategory: foodCategorySlice,
    cart: cartSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
