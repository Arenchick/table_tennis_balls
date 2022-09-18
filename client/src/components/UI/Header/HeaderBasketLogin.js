import React from 'react';
import basket from '../../../Assets/Basket.png'
import login from '../../../Assets/Login.png'
import {useHistory} from "react-router-dom";
import {BASKET_ROUTE, LOGIN_ROUTE} from "../../../utils/Consts";

const HeaderBasketLogin = () => {

    const history = useHistory()

    const toBasket = (event) => {
        event.preventDefault()

        history.push(BASKET_ROUTE)
    }

    const toLogin = (event) => {
        event.preventDefault()

        history.push(LOGIN_ROUTE)
    }

    return (
        <div className={'header_basket_login'}>
            <img className={'header_button'}
                 src={basket}
                 style={{marginRight:"1rem"}}
                 onClick={(event)=>toBasket(event)}/>
            <img className={'header_button'}
                 src={login}
                 onClick={(event)=>toLogin(event)}/>
        </div>
    );
};

export default HeaderBasketLogin;