import React, { useState } from 'react';
import { NavMenu } from './components/NavMenu/NavMenu';
import { FoodMenu } from './features/FoodMenu/FoodMenu';
import { Cart } from './features/modals/Cart';
import { useAppSelector } from './utils/hooks';
import { cartCurrentOrderSelect } from './store/reducers/cartReducer';

const App = () => {
  document.title = 'Menu | Fastfood Order';

  const currentOrder = useAppSelector(cartCurrentOrderSelect);
  const [isShowCart, setIsShowCart] = useState<boolean>(false);

  return (
    <div>
      <NavMenu />
      <button className='cartBtn' onClick={() => setIsShowCart(true)}>
        <img src='images/cart.png' alt='' />
        { currentOrder.length > 0 && <div className='cartCounter'>{currentOrder.length}</div> }
      </button>
      <FoodMenu />
      { isShowCart && <Cart onClose={() => setIsShowCart(false)} /> }
    </div>
  );
}

export default App;