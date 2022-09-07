import React from 'react';
import basketPicture from "../../../Assets/Basket.png";
import {BALL_PAGE_ROUTE, BASKET_ROUTE} from "../../../utils/Consts";
import {useHistory} from "react-router-dom";

const Header = (props) => {
    const history = useHistory()
    const routingToBasket = () => {
        history.push(`${BASKET_ROUTE}`)
    }
    return (
        <div className={'header'} >
            {props.children}

            <img width={17.5}
                 height={17.5}
                 src={basketPicture}
                 onClick={routingToBasket}
            />
        </div>

    );
};

export default Header;