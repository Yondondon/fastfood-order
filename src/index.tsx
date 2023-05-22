import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import { store } from './store/store';
import App from './App';
import './index.css';
import { OrdersPage } from './pages/OrdersPage';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'orders',
    element: <OrdersPage />,
  }
])

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
