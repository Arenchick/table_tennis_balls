import React, {useState} from 'react';
import {changeBasketBallCount} from "../../../http/BasketApi";

const BasketBallItem = ({basketBall, deleteBasketBall, changeCount, select, unselect}) => {

    // const [ballCount, setBallCount] = useState(basketBall.count)

    const [inputQuery, setInputQuery] = useState(basketBall.count)

    // const changeCount = () => {
    //     changeBasketBallCount(basketBall.ball.id,inputQuery).then(data => {
    //         setBallCount(data)
    //     }
    // )}

    const selectBall = (checked) => {
        if (checked){
            select(basketBall)
        }
        else {
            unselect(basketBall)
        }
    }

    return (
        <div>
            {basketBall.ball.name + '||' + basketBall.count}
            <div>
                <input type={'checkbox'} defaultChecked={true} onChange={(event)=>{selectBall(event.target.checked)}}/>
                <button onClick={() => {deleteBasketBall(basketBall.id)}}>Del</button>
                <input defaultValue={inputQuery} onChange={(event) => {setInputQuery(event.target.value)}}/>
                <button onClick={() => {changeCount(basketBall.id,inputQuery)}}>Change</button>
            </div>
        </div>
    );
};

export default BasketBallItem;