import React from "react";
import '../BasketFooter/BasketFooter.css'
import {useSelector} from "react-redux";



const BasketFooter = () => {

    const totalPrice = useSelector(({cart})=> cart.totalPrice );

    return (
        <div className={'footer-wrapper'}>
            <div className={'order'}>
                <p className={'text'}>ЗАКАЗ НА СУММУ: <span style={{color : '#D58C51'}}> {totalPrice} </span>  </p>
            </div>
            <button className={'order-btn'}>ОФОРМИТЬ ЗАКАЗ</button>
        </div>
    )
};

export default BasketFooter;