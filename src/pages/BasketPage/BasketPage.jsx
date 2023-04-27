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
        <div className={''}>
            <BasketHeader />
            <div className={'basket-wrapper'}> {
                items.map(item=> {
                    return (
                        <BasketCard
                        key={item.id}
                        image={item.image}
                        price={item.price}
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

