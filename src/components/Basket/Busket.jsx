import React from "react";
import {products} from "../../pages/ProducsPage/Products";
import ProductCard from "../ProductCard/ProductCard";
import '../Basket/Basket.css'


const Basket = () => {

    return (



        <div className={'basket-wrapper'}> {
            // <Header/>
            products.map(product =>
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    weight={product.weight}
                />
            )
        }

        </div>
    )

};

export default Basket;

