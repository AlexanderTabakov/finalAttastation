import React, {useRef, useState} from "react";
import '../Auth/Auth.css'
import axios from "axios";
import {useDispatch} from "react-redux";
import { login } from "../../store/reducers/user";
import Input from "../input";


const emailValidate = (email, onError) => {

    if(email) {
        const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (regExp.test(email)) {
            onError('');
            return true;
        }else {
            onError('Введен некорректный Email')
            return false;
        }

    }else {
        onError('Поле обязательно для заполнения')
    }
    return false;
};

const passwordValidate = (password, onError) => {

    if (password) {
        if (password.length >= 4) {
            onError('')
            return true;
        } else {
            onError('Пароль не может быть короче 4-х символов')
            return false;
        }
    }else {
            onError('Поле обязательно для заполнения')
        }
        return false


};

const AuthForm = () => {
    const [authData, setAuthData] = useState({
        email: '',
        password: ''
    })

    const onUpdateHandler = (field, value) => {

        setAuthData((prevState)=>({
            ...prevState,
            [field]:value,
        }));

    };

    const dispatch = useDispatch();


    const onLogin = () => {
        axios.post('http://localhost:3004/login', authData)

        .then(({ data }) => dispatch(login({
            accessToken: data.accessToken,
            ...data.user,
        })));
    };

    return (
        <div className={'form'}>
            <h1>Вход</h1>
            <Input type={'email'} validate={emailValidate} onUpdate={onUpdateHandler}/>
            <Input type={'password'} validate={passwordValidate} onUpdate={onUpdateHandler}/>
            <button onClick={onLogin}>Войти</button>
            </div>

    )
};


// const AuthView = () => {
//
//     const username = useRef();
//     const password = useRef();
//
//     const dispatch = useDispatch();
//
//
//     const onLogin = () => {
//         axios.post('http://localhost:3004/login', {
//             email: username.current.value,
//             password: password.current.value
//         })
//
//         .then(({ data }) => dispatch(login({
//             accessToken: data.accessToken,
//             ...data.user,
//         })));
//     };
//
//     return (
//         <div className={'form'}>
//             <h1>Вход</h1>
//             <input type={'email'} onInput={emailValidate} ref={username} defaultValue={'qwerty@mail.ru'}/>
//             <input type='password'  ref={password} defaultValue={'12345'} onInput={passwordValidate}/>
//             <button onClick={onLogin}>Войти</button>
//         </div>
//     );
//
// };
//
//
const RegForm = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })


    const onUpdateHandler = (field, value) => {

        setUserData((prevState)=>({
            ...prevState,
            [field]:value,
        }));

    };



    const onRegister = () => {
        axios.post('http://localhost:3004/register/', userData)
            .then((result)=> console.log(result));
    };


    return (
        <div className={'form'}>
            <h1>Регистрация</h1>
                <Input type={'email'} validate={emailValidate} onUpdate={onUpdateHandler}/>
                <Input type={'password'} validate={passwordValidate} onUpdate={onUpdateHandler}/>
                <button onClick={onRegister}>Войти</button>



            <label htmlFor='' className={'custom-radio'}>
                <input type='checkbox'/>
                <span>Я согласен получать обновления на почту</span>
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

        {isAuthView ? <AuthForm/> : <RegForm/>}
        </div>

    )

};

// export default Auth;
export default Auth;