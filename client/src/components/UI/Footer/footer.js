import React from 'react';
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE} from "../../../utils/Consts";

const Footer = () => {
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
            </div>
            <NavLink className={'header_navbar_link'}
                     to={BASKET_ROUTE}>Корзина</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={ABOUT_ROUTE}>О нас</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={CONTACTS_ROUTE}>Контакты</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={ADMIN_ROUTE}>Админ панель</NavLink>
            {/*<ul className="menu">*/}
            {/*    <li><a href="#">Home</a></li>*/}
            {/*    <li><a href="#">About</a></li>*/}
            {/*    <li><a href="#">Services</a></li>*/}
            {/*    <li><a href="#">Team</a></li>*/}
            {/*    <li><a href="#">Contact</a></li>*/}
            {/*</ul>*/}
            <p>©2022 Все права защищены | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;