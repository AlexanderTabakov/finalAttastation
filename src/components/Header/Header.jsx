
import React from "react";
import './Header.css'
import imgBasket from '../../assets/Basket-Icon.svg'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/reducers/user";
import {clearTheCart} from "../../store/reducers/cart";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Header = ({title}) => {
     let navigate = useNavigate();
     const onCartButtonClickHandler = () => {
         return navigate('/cart')
     };

     const dispatch = useDispatch();

     const onLogout = () => {
         dispatch(logOut())
         dispatch(clearTheCart())
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
            <h1>{title}</h1>
            <div className={'basket'}>

                <div className={'order'}>
                    <p> {totalProduct} {declOfNum(totalProduct, ['товар', 'товара', 'товаров'])} </p>
                    <p> на сумму {totalPrice} ₽</p>
                </div>

                <img className={'image'} style={{cursor: 'pointer'}} src={imgBasket} alt="product" onClick={onCartButtonClickHandler}/>
                <button className={'btn-logout'} onClick={onLogout}>Выйти</button>
            </div>
        </div>
    )
};

export default Header;