import React from 'react';
import { activeCategorySelect } from '../../store/reducers/foodCategoryReducer';
import { useAppSelector } from '../../utils/hooks';
import { foodList } from '../../utils/data';
import { FoodListItem } from './FoodListItem';

export const FoodList = () => {

  const activeCategory = useAppSelector(activeCategorySelect);
  const currentFoodList = foodList[activeCategory.toLowerCase() as keyof typeof foodList] as any[];

  const renderFoodLitsItems = () => {
    let componentsArr: React.ReactElement[] = [];
    for (let i = 0; i < currentFoodList.length; i++) {
      componentsArr.push(
        <FoodListItem
          key={Math.random()}
          name={currentFoodList[i].name}
          imageName={currentFoodList[i].imageName}
          ingredients={currentFoodList[i].ingredients}
        />
      );
    }

    return componentsArr;
  }

  return (
    <div className='foodListWrap'>
      {renderFoodLitsItems()}
    </div>
  )
}