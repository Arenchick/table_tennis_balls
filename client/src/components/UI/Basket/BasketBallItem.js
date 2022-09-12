import React, {useEffect, useState} from 'react';
import {deleteOneBasketBall, getOneBaksetBallCount} from "../../../http/BasketApi";

const BasketBallItem = ({basketBall}) => {

    const [ballCount, setBallCount] = useState(0)

    useEffect(()=>{
        getOneBaksetBallCount(basketBall.ball.id).then(data => {
            setBallCount(data)
        })
    },[])

    return (
        <div>
            {basketBall.ball.name + '||' + ballCount}
            <div>
                <button onClick={()=>{deleteOneBasketBall(basketBall.id)}}/>
            </div>
        </div>
    );
};

export default BasketBallItem;