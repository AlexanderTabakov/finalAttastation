import React from "react";
import '../BasketHeader/BasketHeader.css'
import { Link } from "react-router-dom";
import returnArrow from './../../assets/returnArrow.svg'

const BasketHeader = () => {
    return (
        <div className={'basket-header'}>
                <Link to='/'>
                    <img src={returnArrow} alt={returnArrow}></img>
                </Link>
                <h1 className={'title-basket text'}>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
        </div>
    )
};
export default BasketHeader;