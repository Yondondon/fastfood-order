import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { 
  cartCurrentOrderSelect,
  cartCurrentOrderNumberSelect,
  resetCurrentOrder,
  changeCurrentOrderNumber,
} from '../../store/reducers/cartReducer';
import { addItemToOrdersList } from '../../store/reducers/ordersReducer';
import { CartItem } from '../CartItem/CartItem';
import { Button } from '../../components/Button/Button';

type CartType = {
  onClose: () => void;
}

export const Cart: FC<CartType> = ({ onClose }) => {

  const dispatch = useAppDispatch();
  const currentOrder = useAppSelector(cartCurrentOrderSelect);
  const currentOrderNumber = useAppSelector(cartCurrentOrderNumberSelect);

  const [isShowConfirmation, setIsShowConfirmation] = useState<boolean>(false);


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

  const handleConfirmOrder = () => {
    dispatch(addItemToOrdersList(currentOrderNumber))
    dispatch(resetCurrentOrder())
    dispatch(changeCurrentOrderNumber())
    setIsShowConfirmation(true)
  }  

  return (
    <div className='cartWrap'>
      <div className='cartWindow'>
        <h2 className='cartTitle'>Cart:</h2>
        <div className='cartItemsListWrap'>
          {renderCartList()}
        </div>
        { isShowConfirmation && (
            <div className='cartConfirmationMsgWrap'>
              <img src='images/verified.png' alt='' />
              <p>Yay! Your order #{currentOrderNumber - 1} is processing!</p>
              <div className='cartModalBtnWrap'>
                <Button action={onClose} text='OK' />
              </div>
            </div>
          )
        }
        { currentOrder.length > 0 && (
          <div className='cartModalBtnWrap'>
            <Button action={handleConfirmOrder} text='Confirm' />
          </div>
        ) }
        { !isShowConfirmation && (
            <div className='cartModalBtnWrap'>
              <Button type='close' action={onClose} text='Close' />
            </div>
          )
        }
      </div>
    </div>
  )
}