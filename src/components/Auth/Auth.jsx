import React, {useRef, useState} from "react";
import '../Auth/Auth.css'
import axios from "axios";
import {useDispatch} from "react-redux";
import { login, logOut } from "../../store/reducers/user";
import Input from "../input";

const emailValidate = (email, onError) => {

    if(email) {
        const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return regExp.test(email);
    }else {
        onError('Поле обязательно для заполнения')
    }
    return false;
};

const passwordValidate = (password, onError) => {
    if (password) {
        return password.length >= 4
    }

};


const AuthView = () => {

    const username = useRef();
    const password = useRef();

    const dispatch = useDispatch();


    const onLogin = () => {
        axios.post('http://localhost:3004/login', {
            email: username.current.value,
            password: password.current.value
        })

        .then(({ data }) => dispatch(login({
            accessToken: data.accessToken,
            ...data.user,
        })));
    };

    return (
        <div className={'form'}>
            <h1>Вход</h1>
            <input type='text' ref={username} defaultValue={'qwerty@mail.ru'} onInput={emailValidate}/>
            <input type='password' ref={password} defaultValue={'12345'}/>
            <button onClick={onLogin}>Войти</button>
        </div>
    );

};


const RegView = () => {

    const username = useRef();
    const password = useRef();

    const onRegister = () => {
        axios.post('http://localhost:3004/register/', {
            email: username.current.value,
            password:password.current.value,
        })
            .then((result)=> console.log(result));
    };

    return (
        <div className={'form'}>
            <h1>Регистрация</h1>
            <input type='text' ref={username} defaultValue={'qwerty@mail.ru'}/>
            <input type='password' ref={password} defaultValue={'12345'}/>


            <label  htmlFor=''>Я согласен получать обновления на почту
                <input type='checkbox' className={'custom-checkbox'}/>
            </label>

            <button onClick={onRegister}>Зарегистрироваться</button>
        </div>
    );
};



const Auth = () => {

    const [isAuthView, setAuthView] = useState(false);


    const changeView = () => {
        setAuthView((prevState) => !prevState)
    };



    return (
        <div className={'auth'}>
        <p className={'authBtn text'} onClick={changeView}>{isAuthView ? 'Зарегистрироваться' : 'Войти'}</p>

        {isAuthView ? <AuthView/> : <RegView/>}
        </div>

    )
  
};

export default Auth;