import React from 'react';

const BasketOrderItem = ({basketBall}) => {
    if (basketBall)
        return (
            <div>
            <p key={basketBall.id} className={'Basket_Order_List_Ball_Name'}>• {basketBall.ball.name}, {basketBall.count} шт. -   {basketBall.count*basketBall.ball.price} руб.</p>
                <img className={'ball_item_image'}
                     src={process.env.REACT_APP_API_URL + basketBall.ball.image}/>
            </div>
        );
};

export default BasketOrderItem;