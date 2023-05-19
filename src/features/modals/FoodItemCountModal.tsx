import React, { FC, useState } from 'react';
import { addItemToOrder } from '../../store/reducers/cartReducer';
import { useAppDispatch } from '../../utils/hooks';
import { Button } from '../../components/Button/Button';
import { Counter } from '../Counter/Counter';

type FoodItemCountModalType = {
  onClose: () => void;
  foodItem: {
      name: string;
      imageName: string;
    };
  }

export const FoodItemCountModal: FC<FoodItemCountModalType> = ({onClose, foodItem}) => {

  const [itemCount, setItemCount] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleCounterDecrement = () => {
    if(itemCount > 1) {
      setItemCount(itemCount - 1)
    } else return;
  }

  const handleCounterIncrement = () => {
    if(itemCount < 99) {
      setItemCount(itemCount + 1)
    } else return;
  }

  const handleAddToCart = () => {
    let currentFoodItem = {
      name: foodItem.name,
      imageName: foodItem.imageName,
      quantity: itemCount
    }
    dispatch(addItemToOrder(currentFoodItem));
    onClose();
  }

  return (
    <div className='modalWrap'>
      <div className='modalWindow'>
        <div className='modalTitle'>How much of:</div>
        <div className='modalItemTitle'>{foodItem.name}</div>
        <div className='modalitemCountWrap'>
          <Counter 
            itemCount={itemCount}
            handleCounterDecrement={handleCounterDecrement}
            handleCounterIncrement={handleCounterIncrement}
          />
        </div>
        <div className='modalBtnWrap'>
          <Button action={handleAddToCart} text='OK' />
        </div>
        <div className='modalBtnWrap'>
          <button className='modalCloseBtn' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}