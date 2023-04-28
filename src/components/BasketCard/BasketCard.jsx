import React from "react";
import '../BasketCard/BasketCard.css'

const BasketCard = ({id, image, title, price,onRemoveHandler}) => {

    const onRemoveFromCartHandler = () => {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const updCart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updCart))
        // localStorage.removeItem('cart')

    }

    return (
        <div className={'basketCard'}>
                <img className={'image'} src={image} alt="product"/>

                <p className={'text title'}>{title}</p>

                <p className={'text price'}>{price}₽ </p>

                <button className={'remove-btn'} onClick={onRemoveFromCartHandler}>+</button>






        </div>
    )
}

export default BasketCard;