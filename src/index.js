import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store'
import { Provider } from 'react-redux';

import { RouterProvider,} from "react-router-dom";
import {  createHashRouter,} from 'react-router-dom';

import ProductPage from "./pages/ProductPage";
import reportWebVitals from './reportWebVitals';
import Basket from "./pages/BasketPage/BasketPage";

const router = createHashRouter([
    {
        path: "/",
        element: <ProductPage/>
    },{
        path: "/cart",
        element: <Basket/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>

    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
