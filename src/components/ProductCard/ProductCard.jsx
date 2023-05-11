import React, { useState } from "react";

import './ProductCard.css'
import { useDispatch } from "react-redux";
import { addToCart , removeFromCart } from "../../store/reducers/cart";

const ProductCard = ({id, image, title, description, price, weight}) => {

    const [isAdded, setAddState] = useState(false)

    const dispatch = useDispatch();

    const onAddToCartClickHandler = () => {
        dispatch(addToCart({id, image, title, price}))
        setAddState((prevState) => !prevState)
    };

    const onRemoveFromCartClickHandler = () => {
        dispatch(removeFromCart(id))
        setAddState((prevState) => !prevState)
    };



    return (
        <div className={'card'}>
            <img className={'image'} src={image} alt="product"/>
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