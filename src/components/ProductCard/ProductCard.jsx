import React, { useState } from "react";

import './ProductCard.css'
import {useDispatch, useSelector} from "react-redux";
import cart, { addToCart , removeFromCart } from "../../store/reducers/cart";
import {Link} from "react-router-dom";

const ProductCard = ({id, image, title, description, price, weight}) => {


    const isAdded = useSelector(({cart}) => cart.list.find((product) => product.id === id ));

    const dispatch = useDispatch();

    const onAddToCartClickHandler = () => {
        dispatch(addToCart({id, image, title, price}))
    };

    const onRemoveFromCartClickHandler = () => {
        dispatch(removeFromCart(id))
    };



    return (
        <div className={'card'}>

            <Link to={'/cardPage'}>
                <img className={'image'} src={image} alt="product"/>
            </Link>
            <div className={'card-description text'}>
                <p className={'text title'}>{title}</p>
                <p className={'text description'}>{description}</p>
            </div>
            <div className={'wrapper'}>
                <p className={'text price'}>{price}₽ / {weight}</p>
                <button className={'addToCartBtn'} onClick={isAdded ? onRemoveFromCartClickHandler : onAddToCartClickHandler}>{isAdded ? '-' : '+'}</button>
            </div>



        </div>
    )
};

export default ProductCard