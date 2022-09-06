import React from 'react';
import basketPicture from '../../../Assets/Basket.png'
import {useHistory} from "react-router-dom";
import {BALL_PAGE_ROUTE} from "../../../utils/Consts";

const BallItem = ({ball}) => {

    const history = useHistory()

    const routingToBallPage = () => {
        history.push(`${BALL_PAGE_ROUTE}/${ball.id}`)
    }

    const addingInBasket = (event) => {
        event.stopPropagation()
        // add this ball in busket
    }

    return (
        <div className={'ball_item'}
             onClick={routingToBallPage}>

            <img
                width={187.5}
                height={187.5}
                src={ball.image}/>

            <div className={'ball_item_name'}>
                {ball.name}
            </div>

            <div className={'ball_item_buy'}>

                <div className={'ball_item_price'}>
                    {ball.price}
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