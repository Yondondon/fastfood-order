import React from 'react';
import { useAppSelector } from '../../utils/hooks';
import { ordersListSelect } from '../../store/reducers/ordersReducer';
import { OrderItem } from './OrderItem';


export const OrdersTable = () => {

  const ordersList = useAppSelector(ordersListSelect);

  const renderOrdersList = (status: 'in-progress' | 'ready') => {
    const filteredArr = ordersList.filter(item => item.status === status)
    const componentsArr: React.ReactElement[] = [];
    for(let i = 0; i < filteredArr.length; i++) {
      componentsArr.push(
        <OrderItem
          orderNumber={filteredArr[i].orderNumber}
          status={filteredArr[i].status}
          key={Math.random()}
        />
      )
    }
    return componentsArr;
  }

  return (
    <div className='ordersTableWrap'>
      <div className='ordersTableColumn'>
        <div className='ordersTableTitle'>In Process</div>
        <div className='ordersTableContent'>
          <ul>
            {renderOrdersList('in-progress')}
          </ul>
        </div>
      </div>
      <div className='ordersTableColumn'>
        <div className='ordersTableTitle'>Ready</div>
        <div className='ordersTableContent'>
          <ul>
            {renderOrdersList('ready')}
          </ul>
        </div>
      </div>
    </div>
  )
}