import React, { useState } from 'react';
import { NavMenu } from './components/NavMenu/NavMenu';
import { FoodMenu } from './features/FoodMenu/FoodMenu';
import { Cart } from './features/modals/Cart';

const App = () => {

  const [isShowCart, setIsShowCart] = useState<boolean>(false);

  return (
    <div>
      <NavMenu />
      <button onClick={() => setIsShowCart(true)}>Cart</button>
      <FoodMenu />
      { isShowCart && <Cart onClose={() => setIsShowCart(false)} /> }
    </div>
  );
}

export default App;