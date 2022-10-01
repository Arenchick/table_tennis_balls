import React, {useContext, useState} from 'react';
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {BALLS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/Consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import GreenButton from "../components/UI/Buttons/GreenButton";
import AuthForm from "../components/UI/Auth/AuthForm";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const click = async (event) => {
        event.preventDefault()

        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email,name, password)
            }

            console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
            history.push(BALLS_ROUTE)

        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <div className={'Auth'}>
            <h2 className={'Auth_Title'}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            <AuthForm name={name} email={email} password={password} setName={setName} setEmail={setEmail} setPassword={setPassword} isLogin={isLogin}/>
            <div className={'Auth_Footer'}>
                {isLogin ?
                    <div className={'Auth_Link_Text'}>
                        Нет аккаунта? <NavLink className={'Auth_Link'} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                    </div>
                    :
                    <div className={'Auth_Link_Text'}>
                        Есть аккаунт? <NavLink className={'Auth_Link'} to={LOGIN_ROUTE}>Войдите!</NavLink>
                    </div>
                }
                <GreenButton click={(event) => click(event)} text={isLogin ? 'Войти' : 'Регистрация'}/>
            </div>
        </div>
    );
});

export default Auth;