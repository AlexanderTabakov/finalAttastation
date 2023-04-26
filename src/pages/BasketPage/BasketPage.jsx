import React from "react";
import './BasketPage.css'
import {useNavigate} from "react-router-dom";


const BasketPage = () => {
    let navigate = useNavigate();
    const onCartButtonClickHandler = () => {
        return navigate('/')
    }

    return (
        <div className={''}>
            <button onClick={onCartButtonClickHandler}>TEST</button>
        </div>

    )

};

export default BasketPage;

