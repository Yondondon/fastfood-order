import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import {
  cartCurrentOrderSelect,
  changeCartItemQuantity,
  removeCartItem,
} from '../../store/reducers/cartReducer';
import { Counter } from '../../components/Counter/Counter';

type CartItemType = {
  name: string;
  imageName: string;
  quantity: number;
}

export const CartItem: FC<CartItemType> = ({ name, imageName, quantity}) => {

  const currentOrder = useAppSelector(cartCurrentOrderSelect);
  const dispatch = useAppDispatch();
  

  const handleCounterDecrement = () => {
    const orderIndex = currentOrder.findIndex(item => item.name === name);
    let newQuantity: number = 1;
    const currentQuantity = currentOrder[orderIndex].quantity;
    if(currentQuantity > 1 && currentQuantity <= 99) {
      newQuantity = currentQuantity - 1;
      dispatch(changeCartItemQuantity({index: orderIndex, value: newQuantity}));
    }
  }

  const handleCounterIncrement = () => {
    const orderIndex = currentOrder.findIndex(item => item.name === name);
    let newQuantity: number = 1;
    const currentQuantity = currentOrder[orderIndex].quantity;
    if(currentQuantity > 0 && currentQuantity < 99) {
      newQuantity = currentQuantity + 1;
      dispatch(changeCartItemQuantity({index: orderIndex, value: newQuantity}));
    }
  }

  const handleRemoveCartItem = () => {
    const cartItemIndex = currentOrder.findIndex(item => item.name === name);
    dispatch(removeCartItem(cartItemIndex))
  }


  return (
    <div className='cartItemWrap'>
      <div className='cartItemInfo'>
        <img src={`images/food-list/${imageName}`} alt='' />
        <p>{name}</p>
      </div>
      <div className='cartItemCounterWrap'>
        <Counter
          itemCount={quantity}
          handleCounterDecrement={handleCounterDecrement}
          handleCounterIncrement={handleCounterIncrement}
        />
      </div>
      <button className='removeCartItemBtn' onClick={handleRemoveCartItem}>
        <img src='images/trash.png' alt='' />
      </button>
    </div>
  )
}