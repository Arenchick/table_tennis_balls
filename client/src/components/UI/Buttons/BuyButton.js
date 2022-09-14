import React from 'react';

const BuyButton = ({click}) => {
    return (
        <div onClick={(event) => click(event)}
             className={'button Buy_Button'}>
            Купить
        </div>
    );
};


export default BuyButton;