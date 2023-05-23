import React, { FC } from 'react';
import { OrderItemType } from '../../utils/types';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { ordersListSelect, swapOrderToReady } from '../../store/reducers/ordersReducer';
import { Timer } from './components/Timer';


export const OrderItem: FC<OrderItemType> = ({ orderNumber, status }) => {

  const dispatch = useAppDispatch();
  const orderList = useAppSelector(ordersListSelect);

  const index = orderList.findIndex(item => item.orderNumber === orderNumber)

  return (
    <li>
      <div className='orderNumber'>{orderNumber}</div>
      { status === 'in-progress' && (
          <Timer
            onExpire={() => dispatch(swapOrderToReady(index))}
          />
        )
      }
    </li>
  )
}