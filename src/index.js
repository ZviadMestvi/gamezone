import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppContextProvider } from './store/context';
import App from './App';
import './index.css';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppContextProvider>
);
