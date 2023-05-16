import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const PublicRoute = ({ children }) => {

    const username = useSelector(({user}) => user.email);

    if(username) return <Navigate to={'/productPage'} replace/>

    return children

};
export default PublicRoute;