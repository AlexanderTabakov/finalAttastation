import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header/Header";
import reportWebVitals from './reportWebVitals';
import Basket from "./pages/BasketPage/BasketPage";

const router = createBrowserRouter([
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
  <React.StrictMode>
      <HashRouter>
      <RouterProvider router={router} />
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
