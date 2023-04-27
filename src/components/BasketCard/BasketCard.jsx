import React from "react";
import '../BasketCard/BasketCard.css'

const BasketCard = ({image, title, price}) => {
    return (
        <div className={'basketCard'}>


            <div>
                <img className={'image'} src={image} alt="product"/>
            </div>
            <div>
                <p className={'text title'}>{title}</p>
            </div>
            <div>
                <p className={'text price'}>{price}₽ </p>
                <button className={'remove-btn'}>+</button>
            </div>





        </div>
    )
}

export default BasketCard;