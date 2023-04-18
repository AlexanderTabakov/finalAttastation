
import React from "react";
import './Header.css'
import imgBasket from '../../assets/Basket-Icon.svg'


const Header = () => {
    return (
        <div className={'header'}>
            <h1>Наша продукция</h1>
            <div className={'basket'}>
                <p> 3 Товара
                    на сумму 3500 ₽</p>
                <img className={'image'} src={imgBasket} alt="product"/>
            </div>
        </div>
    )
};

export default Header;