import React from "react";
import './BasketPage.css'
import {products} from "../ProducsPage/Products";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BasketHeader from "../../components/BasketHeader/BasketHeader";
import BasketFooter from "../../components/BasketFooter/BasketFooter";


const BasketPage = () => {
    let navigate = useNavigate();
    const onCartButtonClickHandler = () => {
        return navigate('/');
    }

        const [items, setItems] = useState([]);

        useEffect(() => {
            const cart = JSON.parse(localStorage.getItem('cart'));

            setItems(cart)
        }, []);

    return (
        <div className={''}>
            <BasketHeader />
            <div className={'basket-wrapper'}>

            </div>
           <BasketFooter />
        </div>

    )

};

export default BasketPage;

