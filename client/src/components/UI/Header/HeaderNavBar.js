import React from 'react';
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, ORDER_PAGE_ROUTE, ADMIN_ROUTE} from "../../../utils/Consts";

const HeaderNavBar = () => {
    return (
        <div className={'header_navbar'}>
            <NavLink className={'header_navbar_link'}
                     to={BASKET_ROUTE}>basket</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={ORDER_PAGE_ROUTE}>about</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={ADMIN_ROUTE}>contact</NavLink>
        </div>
    );
};

export default HeaderNavBar;