import React from 'react';
import { NavMenu } from '../components/NavMenu/NavMenu';
import { OrdersTable } from '../features/OrdersTable/OrdersTable';

export const OrdersPage = () => {

  document.title = 'Orders | Fastfood Order';

  return (
    <>
      <header className='mainHeader'>
        <div className='navMenuWrap'>
          <NavMenu />
        </div>
      </header>
      <h1>Orders</h1>
      <OrdersTable />
    </>
  )
}