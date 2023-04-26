
import React from "react";
import './Header.css'
import imgBasket from '../../assets/Basket-Icon.svg'
import {useNavigate} from "react-router-dom";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Header = () => {
     let navigate = useNavigate();
     const onCartButtonClickHandler = () => {
         return navigate('./cart')
     }

    return (
        <div className={'header'}>
            <h1>Наша продукция</h1>
            <div className={'basket'}>

                <div className={'order'}>
                    <p> 3 Товара </p>
                    <p> на сумму 3500 ₽</p>
                </div>

                <img className={'image'} src={imgBasket} alt="product" onClick={onCartButtonClickHandler}/>
            </div>
        </div>
    )
};

export default Header;