import React from 'react';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE} from "../../../utils/Consts";

const HeaderNavBar = () => {
    return (
        <div className={'header_navbar'}>
            <NavLink className={'header_navbar_link'}
                     to={ABOUT_ROUTE}>О нас</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={CONTACTS_ROUTE}>Контакты</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={ADMIN_ROUTE}>Админ панель</NavLink>
        </div>
    );
};

export default HeaderNavBar;