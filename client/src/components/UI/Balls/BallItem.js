import React from 'react';
import {useHistory} from "react-router-dom";
import {BALL_PAGE_ROUTE} from "../../../utils/Consts";
import BallItemBasketButton from "../Buttons/BallItemBasketButton";

const BallItem = ({ball, showBaksetButton = true}) => {

    const history = useHistory()


    const routingToBallPage = () => {
        history.push(`${BALL_PAGE_ROUTE}/${ball.id}`)
    }

    return (
        <div className={'ball_item'}
             onClick={routingToBallPage}>

            <img className={'ball_item_image'}
                src={process.env.REACT_APP_API_URL + ball.image}/>

            <div className={'ball_item_name'}>
                {ball.name}
            </div>

            <div className={'ball_item_buy'}>

                <div className={'ball_item_price'}>
                    {ball.price + ' р.'}
                </div>

                {showBaksetButton ?
                    <BallItemBasketButton ballId={ball.id}/>:
                    <div/>
                }

            </div>

        </div>
    );
};

export default BallItem;