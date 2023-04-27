import React from "react";

const BasketFooter = () => {
    return (
        <div className={'footer-wrapper'}>
            <div className={'order'}>
                <p>ЗАКАЗ НА СУММУ:</p>
            </div>
            <button className={'order-btn'}>ОФОРМИТЬ ЗАКАЗ</button>
        </div>
    )
};

export default BasketFooter;