import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../utils/hooks';
import { 
  foodCategoryListSelect,
  activeCategorySelect,
} from '../../store/reducers/foodCategoryReducer';
import { FoodCategory } from '../../features/FoodCategory/FoodCategory';
import { FoodList } from '../../features/FoodList/FoodList';

export const FoodMenu = () => {

  const foodCategoryList = useAppSelector(foodCategoryListSelect);
  const activeCategory = useAppSelector(activeCategorySelect);
  const [showCategoriesMenu, isShowCategoriesMenu] = useState<boolean>(false)
  const ref = useRef(null) as any;
  
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

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        isShowCategoriesMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [showCategoriesMenu])


  return (
    <>
      <h1>Menu</h1>
      <div className='contentWrap'>
        <div ref={ref} className={`foodCategoryWrap ${showCategoriesMenu ? 'active' : ''}`}>
          { renderFoodCategories() }
          <button className='categoryMenuBtn' onClick={() => isShowCategoriesMenu(!showCategoriesMenu)}>
            { showCategoriesMenu ? (
              <img src='images/close.png' alt='' />
            ) : (
              <img src='images/menu.png' alt='' />
            )}
          </button>
        </div>
        <FoodList />
      </div>
    </>
  )
}