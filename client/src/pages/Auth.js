import React, {useContext, useState} from 'react';
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {BALLS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/Consts";
import {observer} from "mobx-react-lite";
import {Context} from "../App";
import GreenButton from "../components/UI/Buttons/GreenButton";
import AuthForm from "../components/UI/Auth/AuthForm";
import UserStore from "../store/UserStore";
import AuthEmailProof from "../components/UI/Auth/AuthEmailProof";
import {sendMail} from "../http/mailApi";

const Auth = observer(() => {

    const {setUser} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [authErrorIsHidden, setAuthErrorIsHidden] = useState(true)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const [isEmailCheck, setIsEmailCheck] = useState(false)
    const [emailCode, setEmailCode] = useState(0)

    const click = async (event) => {
        event.preventDefault()
        try {
            let data;
            if (isLogin) {
                if (email === '' || password === '')
                {
                    setAuthErrorIsHidden(false)
                    return
                }
                data = await login(email, password)
            } else {
                if (email === '' || name === '' || password === '' || phone === '')
                {
                    setAuthErrorIsHidden(false)
                    return
                }
                let code = Math.floor( Math.random() * (1000000)) + 0o00000;
                sendMail(email,
                    `${code}`
                ).then(data => {
                    setIsEmailCheck(true)
                    setEmailCode(code)
                })
                return
            }

            let newUser = new UserStore()

            newUser._isAuth = true
            newUser._user = data
            setUser(newUser)

            history.push(BALLS_ROUTE)

        } catch (e) {
            setAuthErrorIsHidden(false)
        }
    }

    const reg = async () => {
        try {
        let data = await registration(email,name, password, phone)

        let newUser = new UserStore()

        newUser._isAuth = true
        newUser._user = data
        setUser(newUser)

        history.push(BALLS_ROUTE)

        } catch (e) {
            setAuthErrorIsHidden(false)
        }
            }

    return (
        !isEmailCheck ?
        <div className={'Auth'}>
                    <h2 className={'Auth_Title'}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <h6 className={'Auth_Error'} hidden={authErrorIsHidden}>Не удалось авторизоваться</h6>
                    <AuthForm name={name}
                        email={email}
                        password={password}
                        phone={phone}
                        setName={setName}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setPhone={setPhone}
                        isLogin={isLogin}/>
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
        </div> :
            <AuthEmailProof registration={reg} code={emailCode}/>
    );
});

export default Auth;