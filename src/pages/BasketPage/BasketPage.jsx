import React from "react";
import './BasketPage.css'
import {products} from "../ProducsPage/Products";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BasketHeader from "../../components/BasketHeader/BasketHeader";
import BasketFooter from "../../components/BasketFooter/BasketFooter";
import BasketCard from "../../components/BasketCard/BasketCard";



const BasketPage = () => {

        const [items, setItems] = useState([]);

        useEffect(() => {
            const cart = JSON.parse(localStorage.getItem('cart'));

            setItems(cart)
        }, []);


    return (
        <div className={'basket-wrapper'}>
            <BasketHeader />
            <div className={'cards-in-basket'}>
                {/*{items? <h1 className={'title-basket text'}>КОРЗИНА </h1>: <h1 className={'title-basket text'}>КОРЗИНА ПУСТА</h1>}*/}
                {
                items?.map(item=> {
                    return (
                        <BasketCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        onRemoveHandler={setItems}
                        />
                    )
                })
            }

            </div>
           <BasketFooter />
        </div>

    )

};

export default BasketPage;

