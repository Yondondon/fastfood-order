import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { foodCategoryItemType } from '../../utils/types';
import { foodCategoryList } from '../../utils/data';

export interface foodCategoryState {
  foodCategoryList: foodCategoryItemType[];
  activeCategory: string;
}

const initialState: foodCategoryState = {
  foodCategoryList: foodCategoryList,
  activeCategory: 'Burgers',
};

export const foodCategorySlice = createSlice({
  name: 'foodCategory',
  initialState,
  reducers: {
    changeActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    }
  }
});

export const { changeActiveCategory } = foodCategorySlice.actions;

export const foodCategoryListSelect = (state: RootState) => state.foodCategory.foodCategoryList;
export const activeCategorySelect = (state: RootState) => state.foodCategory.activeCategory;

export default foodCategorySlice.reducer;