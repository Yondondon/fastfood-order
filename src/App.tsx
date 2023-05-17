import React from 'react';
import { useAppSelector } from './utils/hooks';
import { 
  foodCategoryListSelect,
  activeCategorySelect,
} from './store/reducers/foodCategoryReducer';
import { FoodCategory } from './features/FoodCategory/FoodCategory';
import { FoodList } from './features/FoodList/FoodList';

const App = () => {
  const foodCategoryList = useAppSelector(foodCategoryListSelect);
  const activeCategory = useAppSelector(activeCategorySelect);
  
  const renderFoodCategories = () => {
    let componentsArr: React.ReactElement[] = [];
    for(let i = 0; i < foodCategoryList.length; i++) {
      componentsArr.push(
        <FoodCategory
          key={Math.random()}
          name={foodCategoryList[i].name}
          imageName={foodCategoryList[i].imageName}
          isActive={foodCategoryList[i].name === activeCategory ? true : false}
        />
      )
    }
    return componentsArr;
  }

  return (
    <div>
      <h1>Place Order</h1>
      <div className='contentWrap'>
        <div className='foodCategoryWrap'>
          { renderFoodCategories() }
        </div>
        <FoodList />
      </div>
    </div>
  );
}

export default App;