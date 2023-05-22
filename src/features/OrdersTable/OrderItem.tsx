import React, { FC } from 'react';
import { OrderItemType } from '../../utils/types';
import { Timer } from '../../components/Timer/Timer';


export const OrderItem: FC<OrderItemType> = ({ orderNumber, status }) => {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  return (
    <li>
      <div className='orderNumber'>{orderNumber}</div>
      { status === 'in-progress' && <div className='orderTimer'><Timer expiryTimestamp={time} /></div> }
    </li>
  )
}