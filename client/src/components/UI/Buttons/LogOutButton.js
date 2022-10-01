import React from 'react';

const LogOutButton = ({click}) => {
    return (
        <div onClick={(event) => click(event)}
             className={'button LogOut_Button'}>
            Выйти
        </div>
    );
};

export default LogOutButton;