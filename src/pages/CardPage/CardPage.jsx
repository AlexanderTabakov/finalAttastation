import React, {useState, useEffect} from "react";
import returnArrow from "../../assets/returnArrow.svg";
import {Link, useParams} from "react-router-dom";
import './CardPage.css'
import Header from "../../components/Header/Header";
import axios from "axios";
import {useSelector} from "react-redux";

const CardPage = () => {


    const { id } = useParams()

    const { title, description, image, price } = useSelector(({product}) =>
         product.list.find((product) =>
             product.id === +id))



    // const [product, setProducts] = useState([])
    //
    // useEffect(() => {
    //     axios.get('http://localhost:3004/products')
    //         .then(({data}) => {
    //             setProducts(data)
    //         });
    //
    // }, [])
    //
    // const chosenProduct = product && product.filter(el=>el.id===id)

    return (

        <div>{id}</div>

        // <div>{chosenProduct && chosenProduct.name}</div>
      // <div>
      //     <Header/>
      //     <div className={'cardPage'}>
      //         <Link to='/productPage'>
      //             <img src={returnArrow} alt={returnArrow}></img>
      //             <img className={'image'} src={image} alt="product"/>
      //             <div className={'card-description text'}>
      //                 <p className={'text title'}>{title}</p>
      //                 <p className={'text description'}>{description}</p>
      //
      //             </div>
      //
      //         </Link>
      //     </div>
      //
      // </div>
    )
};

export default CardPage;
