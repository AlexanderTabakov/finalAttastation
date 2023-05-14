import React from "react";
import  './StartPage.css'
import image from '../../assets/StartPageBg.png'
import returnArrow from "../../assets/returnArrow.svg";
import {Link} from "react-router-dom";


const StartPage = () => {


    return (
        <div className={'startPage'}>

            <Link to='/productPage'>
                <img src={returnArrow} alt={returnArrow}></img>
            </Link>

        </div>
    )
};

export default StartPage;