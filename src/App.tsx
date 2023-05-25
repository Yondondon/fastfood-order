import React, { useEffect, useState } from 'react';
import { NavMenu } from './components/NavMenu/NavMenu';
import { FoodMenu } from './features/FoodMenu/FoodMenu';
import { Cart } from './features/modals/Cart';
import { useAppSelector } from './utils/hooks';
import { cartCurrentOrderSelect } from './store/reducers/cartReducer';

const App = () => {
  document.title = 'Menu | Fastfood Order';

  const currentOrder = useAppSelector(cartCurrentOrderSelect);
  const [isShowCart, setIsShowCart] = useState<boolean>(false);

  useEffect(() => {
    if(isShowCart) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = 'auto';
      document.body.style.overflowY = 'auto';
    }
  }, [isShowCart])


  return (
    <>
      <header className='mainHeader'>
        <div className='navMenuWrap'>
          <NavMenu />
        </div>
        <button className='cartBtn' onClick={() => setIsShowCart(true)}>
          <img src='images/cart.png' alt='' />
          { currentOrder.length > 0 && <div className='cartCounter'>{currentOrder.length}</div> }
        </button>
      </header>
      <FoodMenu />
      { isShowCart && <Cart onClose={() => setIsShowCart(false)} /> }
    </>
  );
}

export default App;