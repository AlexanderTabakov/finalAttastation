import React from "react";
import './ProductsPage.css'
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import {products} from "./ProducsPage/Products";
import { Routes, Route, Link } from "react-router-dom";

const ProductPage = () => {

    return (
        <div className={''}>
            <Header/>
            <div className={'product-wrapper'}> {
                products.map(product =>
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        weight={product.weight}
                    />
                )
            }

            </div>
        </div>


    )

};

export default ProductPage;