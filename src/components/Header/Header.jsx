
import React from "react";
import './Header.css'
import imgBasket from '../../assets/Basket-Icon.svg'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Header = () => {
     let navigate = useNavigate();
     const onCartButtonClickHandler = () => {
         return navigate('/cart')
     };

     const totalPrice = useSelector(({cart})=> cart.totalPrice );
     const totalProduct = useSelector(({cart})=> cart.productCount );

    function declOfNum(n, textForms) {
        n = Math.abs(n) % 100;
        var n1 = n % 10;
        if (n > 10 && n < 20) { return textForms[2]; }
        if (n1 > 1 && n1 < 5) { return textForms[1]; }
        if (n1 == 1) { return textForms[0]; }
        return textForms[2];
    }


    return (
        <div className={'header'}>
            <h1>Наша продукция</h1>
            <div className={'basket'}>

                <div className={'order'}>
                    <p> {totalProduct} {declOfNum(totalProduct, ['товар', 'товара', 'товаров'])} </p>
                    <p> на сумму {totalPrice} ₽</p>
                </div>

                <img className={'image'} src={imgBasket} alt="product" onClick={onCartButtonClickHandler}/>
            </div>
        </div>
    )
};

export default Header;