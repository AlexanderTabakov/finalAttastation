import React, {useEffect, useState} from "react";
import './ProductsPage.css'
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import {products} from "./ProducsPage/Products";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/products')
            .then(({data}) => {
                setProducts(data)
            });

    }, [])

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