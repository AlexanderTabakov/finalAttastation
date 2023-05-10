import React from "react";

import './ProductCard.css'

const ProductCard = ({id, image, title, description, price, weight}) => {

    const onAddToCartClickHandler = () => {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const product = { id, title, image, price, weight}

        cart.push(product)

        localStorage.setItem('cart', JSON.stringify(cart))


    }

    return (
        <div className={'card'}>
            <img className={'image'} src={image} alt="product"/>
            <div className={'card-description text'}>
                <p className={'text title'}>{title}</p>
                <p className={'text description'}>{description}</p>
            </div>
            <div className={'wrapper'}>
                <p className={'text price'}>{price}₽ / {weight}</p>
                <button className={'addToCartBtn'} onClick={onAddToCartClickHandler}>+</button>
            </div>



        </div>
    )
};

export default ProductCard