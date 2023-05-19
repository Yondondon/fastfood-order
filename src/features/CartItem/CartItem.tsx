import React, { FC } from 'react';
import { useAppSelector } from '../../utils/hooks';
import { cartCurrentOrderSelect, changeCartItemQuantity } from '../../store/reducers/cartReducer';
import { Counter } from '../Counter/Counter';

type CartItemType = {
  name: string;
  imageName: string;
  quantity: number;
}

export const CartItem: FC<CartItemType> = ({ name, imageName, quantity}) => {

  const currentOrder = useAppSelector(cartCurrentOrderSelect);
  

  // const handleCounterDecrement = () => {
  //   if(itemCount > 1) {
  //     setItemCount(itemCount - 1)
  //   } else return;
  // }

  const handleCounterIncrement = () => {
    const index = currentOrder.findIndex(item => item.name === name);
    
  }


  return (
    <div className="cartItemWrap">
      <div className="cartItemInfo">
        <img src={`images/food-list/${imageName}`} alt='' />
        <p>{name}</p>
      </div>
      <div className='cartItemCounterWrap'>
        <Counter
          itemCount={quantity}
          handleCounterDecrement={() => console.log('-')}
          handleCounterIncrement={handleCounterIncrement}
        />
      </div>
    </div>
  )
}