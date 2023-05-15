import React from 'react';
import ReactDOM from 'react-dom/client';
import  store, { persistor } from './store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider,} from "react-router-dom";
import {  createHashRouter,} from 'react-router-dom';
import ProductPage from "./pages/ProductPage/ProductPage";
import reportWebVitals from './reportWebVitals';
import Basket from "./pages/BasketPage/BasketPage";
import StartPage from "./pages/StartPage/StartPage";
import CardPage from "./pages/CardPage/CardPage";


const router = createHashRouter([
    {
        path: "/",
        element: <StartPage/>
    },
    {
        path: "/productPage",
        element: <ProductPage/>
    },
    {
        path: "/cardPage/:id",
        element: <CardPage/>
    },
    {
        path: "/cart",
        element: <Basket/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

  <React.StrictMode>

      <PersistGate loading={null} persistor={persistor}>

      <RouterProvider router={router} />

      </PersistGate>

  </React.StrictMode>

    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
