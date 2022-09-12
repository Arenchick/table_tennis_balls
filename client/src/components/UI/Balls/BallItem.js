import React, {useContext} from 'react';
import basketPicture from '../../../Assets/Basket.png'
import {useHistory} from "react-router-dom";
import {BALL_PAGE_ROUTE} from "../../../utils/Consts";
import {Context} from "../../../index";
import {changeBasketBallCount, createBasketBall, getOneBasketBallCount} from "../../../http/BasketApi";

const BallItem = ({ball}) => {

    const history = useHistory()

    const {user} = useContext(Context)

    const routingToBallPage = () => {
        history.push(`${BALL_PAGE_ROUTE}/${ball.id}`)
    }

    const addingInBasket = (event) => {
        event.stopPropagation()

        getOneBasketBallCount(ball.id).then(data => {

            if(data >= 1){
                changeBasketBallCount(ball.id, data+1)
            }
            else {
                createBasketBall(user.user.id, ball.id)

            }
        })
    }

    return (
        <div className={'ball_item'}
             onClick={routingToBallPage}>

            <img
                width={187.5}
                height={187.5}
                src={process.env.REACT_APP_API_URL + ball.image}/>

            <div className={'ball_item_name'}>
                {ball.name}
            </div>

            <div className={'ball_item_buy'}>

                <div className={'ball_item_price'}>
                    {ball.price + ' р.'}
                </div>

                <div className={'ball_item_basket_button'} onClick={addingInBasket}>
                    <img width={17.5}
                         height={17.5}
                         src={basketPicture}
                    />
                </div>

            </div>

        </div>
    );
};

export default BallItem;