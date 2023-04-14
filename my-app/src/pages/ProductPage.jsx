import React from "react";
import './ProductsPage.css'
import ProductCard from "../components/ProductCard/ProductCard";

const ProductPage = () => {

    return (
        <div className={'product-wrapper'}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )

};

export default ProductPage;