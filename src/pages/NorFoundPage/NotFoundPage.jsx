import React from "react";
import notFoundPage from '../../assets/NotFoundPage.png'

const NotFoundPage = () => {

    return(
        <div className={'notFoundPage'} >
            <img src={notFoundPage} alt="" style={{width:'100vw'}}/>
        </div>
    )

};

export default NotFoundPage;