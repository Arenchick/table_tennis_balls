import React, {useEffect, useState} from 'react';
import {changeBasketBallCount, deleteOneBasketBall} from "../../../http/BasketApi";

const BasketBallItem = ({basketBall, deleteBasketBall}) => {

    const [ballCount, setBallCount] = useState(basketBall.count)

    const [inputQuery, setInputQuery] = useState(basketBall.count)

    const changeCount = (newCount) => {
        changeBasketBallCount(basketBall.ball.id,inputQuery).then(data => {
            setBallCount(data)
        }
    )}

    return (
        <div>
            {basketBall.ball.name + '||' + ballCount}
            <div>
                <button onClick={() => {deleteBasketBall(basketBall.id)}}>Del</button>
                <input defaultValue={inputQuery} onChange={(event) => {setInputQuery(event.target.value)}}/>
                <button onClick={() => {changeCount(2)}}>Change</button>
            </div>
        </div>
    );
};

export default BasketBallItem;