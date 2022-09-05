import React, {useContext} from 'react';
import BallItem from "./BallItem";
import {Context} from "../../../index";

const BallsList = () => {

    const {ball} = useContext(Context)

    return (
        <div className={'balls_list'}>
            {ball.balls.map(item =>
                <BallItem key={item.id} ball={item}/>
            )}
        </div>
    );
};

export default BallsList;