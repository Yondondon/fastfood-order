import React, { FC, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { FoodItemCountModal } from '../../modals/FoodItemCountModal';

type FoodListItemType = {
  name: string;
  imageName: string;
  ingredients: string[];
}

export const FoodListItem: FC<FoodListItemType> = ({ name, imageName, ingredients }) => {
  
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const ingredientsArrToStr: string = (ingredients.length > 0 && ingredients.join(', ')) || '';

  return (
    <div className='foodListItem'>
      <img src={`images/food-list/${imageName}`} alt ='' />
      <span className='foodTitle'>{name}</span>
      { ingredientsArrToStr && <div className='ingredientsList'>{ingredientsArrToStr}</div> }
      <div className='addToCartBtnWrap'>
        <Button text='Add to cart' action={() => setIsShowModal(true)} />
      </div>
      { isShowModal && <FoodItemCountModal foodItem={{name, imageName}} onClose={() => setIsShowModal(false)} /> }
    </div>
  )
}