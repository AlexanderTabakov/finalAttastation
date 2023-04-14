import React from "react";

import './ProductCard.css'

import '../../assets/Oysters.svg'
import '../../assets/Ribs.svg'
import '../../assets/Shrimps.svg'

// const ProductCard = (image, title, description) => {
const ProductCard = () => {
    return (
        <div className={'card'}>
            <img className={'image'} src='../../assets/Shrimps.svg' alt="product"/>
            <p className={'text title'}>NNNNNNNNN</p>
            <p className={'text description'}>DDDDDDDDDDDDDDDDD</p>

        </div>
    )
};

export default ProductCard