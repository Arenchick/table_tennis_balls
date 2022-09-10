import React, {useContext} from 'react';
import basketPicture from "../../../Assets/Basket.png";
import {BALL_PAGE_ROUTE, BASKET_ROUTE} from "../../../utils/Consts";
import {useHistory} from "react-router-dom";
import NavBar from "../NavBar";
import {Context} from "../../../index";

const Header = (props) => {
    const history = useHistory()

        return (
        <div className={'header'} >
            {props.children}
            <NavBar/>
        </div>

    );
};

export default Header;