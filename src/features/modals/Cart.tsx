import React, { FC } from 'react';
import { useAppSelector } from '../../utils/hooks';
import { cartCurrentOrderSelect } from '../../store/reducers/cartReducer';
import { CartItem } from '../CartItem/CartItem';

type CartType = {
  onClose: () => void;
}

export const Cart: FC<CartType> = ({ onClose }) => {

  const currentOrder = useAppSelector(cartCurrentOrderSelect);


  const renderCartList = () => {
    let cartList: React.ReactElement[] = [];
    for(let i = 0; i < currentOrder.length; i++) {
      cartList.push(
        <CartItem
          key={Math.random()}
          name={currentOrder[i].name}
          imageName={currentOrder[i].imageName}
          quantity={currentOrder[i].quantity}
        />
      )
    }
    return cartList;
  }

  return (
    <div className='cartWrap'>
      <div className='cartWindow'>
        <h2 className='cartTitle'>Cart:</h2>
        <div>
          {renderCartList()}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}