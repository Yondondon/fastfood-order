import React, { FC, useState } from 'react';
import {
  addItemToCart,
  cartCurrentOrderSelect,
  changeCartItemQuantity,
} from '../../store/reducers/cartReducer';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { Button } from '../../components/Button/Button';
import { Counter } from '../../components/Counter/Counter';

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
  const currentOrder = useAppSelector(cartCurrentOrderSelect);

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

  const isInCart = () => {
    let result = false;
    for(let i = 0; i < currentOrder.length; i++) {
      if(currentOrder[i].name === foodItem.name) {
        result = true;
        break;
      }
    }
    return result;
  }

  const handleAddToCart = () => {
    let currentFoodItem = {
      name: foodItem.name,
      imageName: foodItem.imageName,
      quantity: itemCount
    }
    if(isInCart()) {
      const orderIndex = currentOrder.findIndex(item => item.name === foodItem.name);
      let newQuantity: number = 1;
      const currentQuantity = currentOrder[orderIndex].quantity;
      newQuantity = currentQuantity + itemCount;
      if(newQuantity >= 99) newQuantity = 99; //we don't like numbers more than 99 :P
      dispatch(changeCartItemQuantity({index: orderIndex, value: newQuantity}));
    } else {
      dispatch(addItemToCart(currentFoodItem));
    }
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
          <Button type='close' action={onClose} text='Close' />
        </div>
      </div>
    </div>
  )
}