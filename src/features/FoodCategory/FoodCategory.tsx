import React, { FC } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { changeActiveCategory } from '../../store/reducers/foodCategoryReducer'

type FoodCategoryType = {
  name: string;
  imageName: string;
  isActive: boolean;
}

export const FoodCategory: FC<FoodCategoryType> = ({ name, imageName, isActive }) => {

  const dispatch = useAppDispatch();
  
  const handleClick = () => {
    dispatch(changeActiveCategory(name))
  }

  return (
    <div
      className={`foodCategoryItem ${isActive? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={`images/${imageName}`} alt='' />
      <span>{name}</span>
    </div>
  )
}