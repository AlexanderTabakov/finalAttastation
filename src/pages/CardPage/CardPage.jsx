import React from "react";
import returnArrow from "../../assets/returnArrow.svg";
import {Link} from "react-router-dom";
import './CardPage.css'
import Header from "../../components/Header/Header";

const CardPage = ({id, image, title, description, price, weight}) => {


    return (
      <div>
          <Header/>
          <div className={'cardPage'}>
              <Link to='/productPage'>
                  <img src={returnArrow} alt={returnArrow}></img>
                  <img className={'image'} src={image} alt="product"/>
                  <div className={'card-description text'}>
                      <p className={'text title'}>{title}</p>
                      <p className={'text description'}>{description}</p>

                  </div>

              </Link>
          </div>

      </div>
    )
};

export default CardPage;
