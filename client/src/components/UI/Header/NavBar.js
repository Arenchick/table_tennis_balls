import React, {useContext} from 'react';

import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import {Context} from "../../../index";
import {ADMIN_ROUTE, BALLS_ROUTE, BASKET_ROUTE, LOGIN_ROUTE} from "../../../utils/Consts";
import basketPicture from "../../../Assets/Basket.png";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        // console.log(user._isAuth)
    }
    const routingToBasket = () => {
        history.push(`${BASKET_ROUTE}`)
    }
// console.log(user._isAuth)
    return (
            <div>
                <button onClick={() => history.push(BALLS_ROUTE)}>
                    Магазин
                </button>
                {user.isAuth ?
                    <div>
                        <button
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Панель админа
                        </button>
                        <img width={17.5}
                             height={17.5}
                             src={basketPicture}
                             onClick={routingToBasket}
                        />
                        <button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                        >
                            Выйти
                        </button>
                    </div>
                    :
                    <button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</button>
                }
            </div>
    );
});

export default NavBar;
