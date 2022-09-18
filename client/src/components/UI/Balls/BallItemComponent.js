import React from 'react';
import {useHistory} from "react-router-dom";
import {BALL_PAGE_ROUTE} from "../../../utils/Consts";
import BallItemPrice from "./BallItemPrice";

const BallItemComponent = (props) => {

    const history = useHistory()

    let ballInfo
    if (props.showInfo){
        ballInfo =
        <div className={'ball_item_info'}>
            <div>
                <h6>Brand:</h6>
                <div className={'ball_item_info_value'}>
                    {props.ball.ball_info.brand.value}
                </div>
            </div>
            <div>
                <h6>Star:</h6>
                <div className={'ball_item_info_value'}>
                    {props.ball.ball_info.star.value}
                </div>
            </div>
        </div>
    }

    const routingToBallPage = () => {
        if (props.allowRouteOnClick)
            history.push(`${BALL_PAGE_ROUTE}/${props.ball.id}`)
    }

    const imageRoutingToBallPage = () => {
        history.push(`${BALL_PAGE_ROUTE}/${props.ball.id}`)
    }


    return (
        <div className={`ball_item ${props.ballItemClassName}`}
             onClick={routingToBallPage}>

            <img className={'ball_item_image'}
                 onClick={imageRoutingToBallPage}
                 src={process.env.REACT_APP_API_URL + props.ball.image}/>

                <div className={props.ballItemInfoClassName}>
                    <div className={'ball_item_all_info'}>
                        <div className={'ball_item_name'}>
                            {props.showInfo ?
                                <h4>{props.ball.name}</h4> :
                                <div>{props.ball.name}</div>
                            }
                        </div>
                        {ballInfo}
                        <BallItemPrice price={props.price} />
                    </div>

                    {props.children}
                </div>
        </div>
    );
};

export default BallItemComponent;