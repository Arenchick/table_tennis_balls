import React from 'react';

const BasketOrderItem = ({basketBall}) => {
    if (basketBall.selected)
        return (
            <p key={basketBall.id} className={'Basket_Order_List_Ball_Name'}>• {basketBall.ball.name}, {basketBall.count}шт</p>
        );
};

export default BasketOrderItem;