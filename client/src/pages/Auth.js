import React, {useContext, useState} from 'react';
import Container from "../components/UI/Container/Container";
import {BALL_PAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/Consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {Context} from "../index";
import TennisInput from "../components/UI/Input/TennisInput";
import {login, registration} from "../components/http/UserAPI";

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(BALL_PAGE_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <Container
            style={{height: 1000}}>

            <h2 >{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            <form>
                {isLogin ?
                    <div>
                    <TennisInput
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TennisInput  placeholder="Введите ваш пароль..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"/>
                    </div>
                :
                    <div>
                    <TennisInput
                    placeholder="Введите ваш email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <TennisInput
                    placeholder="Введите ваше Имя..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <TennisInput  placeholder="Введите ваш пароль..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"/>}
                    </div>}
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
};

export default Auth;