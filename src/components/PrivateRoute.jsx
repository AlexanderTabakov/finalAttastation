import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const username = useSelector(({user}) => user.email);

    if(!username) return <Navigate to={'/'} replace/>

    return children

};

// const PrivateRoute = () => {
//     const username = useSelector(({user}) => user.name);
//     return (
//         username ? <Outlet/> : <Navigate to={'/'}/>
//     )
// };
 export default PrivateRoute;

