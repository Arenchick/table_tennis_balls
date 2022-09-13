import React, {useContext} from 'react';
import basketPicture from "../../../Assets/Basket.png";
import {changeBasketBallCount, createBasketBall, getOneBasketBallCount} from "../../../http/BasketApi";
import {Context} from "../../../index";

const BallItemBasketButton = ({ballId}) => {

    const {user} = useContext(Context)

    const addingInBasket = (event) => {
        event.stopPropagation()

        getOneBasketBallCount(ballId).then(data => {
            if(data >= 1){
                // ===============ball=====count======================================================================================================
                changeBasketBallCount(ballId, data+1).then(data => {
                    alert('Увеличено кол-во')
                })
            }
            else {
                createBasketBall(user.user.id, ballId).then(data => {
                    alert('Добавлено')
                })

            }
        })
    }

    return (
        <div className={'ball_item_basket_button'} onClick={addingInBasket}>
            <img width={17.5}
                 height={17.5}
                 src={basketPicture}
            />
        </div>
    );
};

export default BallItemBasketButton;