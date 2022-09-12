import React from 'react';
import NavBar from "../NavBar";

const Header = (props) => {
        return (
        <div className={'header'} >
            {props.children}
            <NavBar/>
        </div>

    );
};

export default Header;