import React from 'react';

const BallItem = ({ball}) => {
    return (
        <div className={'ball_item'}>
            <img
                width={187.5}
                height={187.5}
                src={ball.image}/>
            <p className={'ball_item_name'}>
                {ball.name}
            </p>
            <div className={'ball_item_price'}>
                {ball.price}
            </div>
        </div>
    );
};

export default BallItem;