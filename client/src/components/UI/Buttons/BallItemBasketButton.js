import React, {useContext} from 'react';
import basketPicture from "../../../Assets/Basket.png";
import {changeBasketBallCount, createBasketBall, getOneBasketBallCount} from "../../../http/BasketApi";
import {Context} from "../../../App";
import {useHistory} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../utils/Consts";

const BallItemBasketButton = ({ballId, ClassName = 'ball_item_basket_button'}) => {

    const {user} = useContext(Context)
    const history = useHistory()
    const addingInBasket = (event) => {
        event.stopPropagation()
        if (!user._isAuth){
            history.push(LOGIN_ROUTE)
            return
        }

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
        <div className={`button ${ClassName}`} onClick={addingInBasket}>
            <div style={{marginRight: "5px"}}>В корзину</div>
            <img width={17.5}
                 height={17.5}
                 src={basketPicture}
            />
        </div>
    );
};

export default BallItemBasketButton;