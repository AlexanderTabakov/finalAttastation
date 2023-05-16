import React, { useState } from "react";

import './ProductCard.css'
import {useDispatch, useSelector} from "react-redux";
import  { addToCart , removeFromCart } from "../../store/reducers/cart";
import Modal from 'react-modal';
import Header from "../Header/Header";
import cardPageBg from '../../assets/CardPageBg.png'



const ProductCard = ({id, image, title, description, price, weight}) => {




    const isAdded = useSelector(({cart}) => cart.list.find((product) => product.id === id ));

    const dispatch = useDispatch();

    const onAddToCartClickHandler = () => {
        dispatch(addToCart({id, image, title, price}))
    };

    const onRemoveFromCartClickHandler = () => {
        dispatch(removeFromCart(id))
    };
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundImage: `url(${cardPageBg})`,
            width: '80%',
            height: '',
            backgroundColor: 'rgb(18 16 16 / 75%)'

        },
    };


    const modalContent = (
        <div className={'modal'}>

           <div> <img className={'image'} src={image} alt="product"/></div>
            <div className={'modal-description'}>
                <h2 style={{color:'#D58C51'}}>{title}</h2>
                <p className={'text'}>{description}</p>
                <div style={{display:"flex", alignItems: 'center'}}>
                    <p className={'text price'}>{price}₽ / {weight}</p>
                    <button className={'addToCartBtnModal text'} onClick={isAdded ? onRemoveFromCartClickHandler : onAddToCartClickHandler}>{isAdded ? 'Убрать из корзины' : 'Добавить в корзину'}</button>
                </div>
                {/*<button onClick={closeModal}>Закрыть</button>*/}
            </div>
        </div>

    );



    return (
        <div className={'card'}>

                <img className={'image'} src={image} alt="product" onClick={openModal} style={{cursor : "pointer"}}/>

            <div className={'card-description text'}>
                <p className={'text title'}>{title} </p>
                <p className={'text description'}>{description}</p>
            </div>
            <div className={'wrapper'}>
                <p className={'text price'}>{price}₽ / {weight}</p>
                <button className={'addToCartBtn'} onClick={isAdded ? onRemoveFromCartClickHandler : onAddToCartClickHandler}>{isAdded ? '-' : '+'}</button>
            </div>

            <div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} >
                    {modalContent}
                </Modal>
            </div>



        </div>
    )
};

export default ProductCard