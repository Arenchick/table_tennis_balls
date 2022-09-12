import React, {useContext, useEffect, useState} from 'react';
import BasketBallItem from "./BasketBallItem";

const BasketBallsList = ({basketBalls, deleteBasketBall}) => {

    // ===C===O===U===N===T===

    return (
        <div>
            {basketBalls.map(basketBall =>
                <BasketBallItem key={basketBall.id} basketBall={basketBall} deleteBasketBall={deleteBasketBall}/>
            )}
        </div>
    );
};

export default BasketBallsList;