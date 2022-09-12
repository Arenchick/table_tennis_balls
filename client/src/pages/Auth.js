import React, {useContext, useState} from 'react';
import Container from "../components/UI/Container/Container";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {BALLS_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/Consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import TennisInput from "../components/UI/Input/TennisInput";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email,name, password);
            }
            console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
            window.location.assign('http://localhost:3000/basket');
            console.log(user._isAuth)
            // history.push(BALLS_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

        // let data;
        // if (isLogin) {
        //     data = await login(email, password);
        // } else {
        //     data = await registration(email,name, password);
        // }
        // console.log(data)
        // user.setUser(data)
        // user.setIsAuth(true)
        // console.log(user._isAuth)
    }
    return (
        <Container style={{height: window.innerHeight - 54}}>

                <h2 >{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <form>
                        <div>
                            <TennisInput type="text" placeholder="Введите ваш email..."
                                          value={email}
                                          onChange={e => setEmail(e.target.value)}/>
                            <TennisInput type="text" placeholder="Введите ваше имя..."
                                         value={name}
                                         onChange={e => setName(e.target.value)}
                                         type="text"/>

                            <TennisInput type="text" placeholder="Введите ваш пароль..."
                                         value={password}
                                         onChange={e => setPassword(e.target.value)}
                                         type="password"/>
                        </div>
                    {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <button

                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </button>

                </form>
        </Container>
    );
});

export default Auth;