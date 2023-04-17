import React from "react";
import './ProductsPage.css'
import ProductCard from "../components/ProductCard/ProductCard";
import {products} from "./ProducsPage/Products";

const ProductPage = () => {

    return (



        <div className={'product-wrapper'}> {
            products.map(product =>
                <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                />
            )
        };

        </div>
    )

};

export default ProductPage;