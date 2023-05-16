import React from "react";
import  './StartPage.css'
import image from '../../assets/StartPageBg.png'
import returnArrow from "../../assets/returnArrow.svg";
import {Link} from "react-router-dom";
import Auth from "../../components/Auth/Auth";


const StartPage = () => {


    return (

        <>
            <Auth/>
        <div className={'startPage'}>

        </div>
        </>
    )
};

export default StartPage;