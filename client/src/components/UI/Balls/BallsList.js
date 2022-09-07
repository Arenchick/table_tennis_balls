import React, {useContext, useEffect} from 'react';
import BallItem from "./BallItem";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {fetchBalls} from "../../../http/ballApi";

const BallsList = observer(() => {

    const {ball} = useContext(Context)

    useEffect(()=>{
       fetchBalls().then(data => ball.setBalls(data))
    },[])

    return (
        <div className={'balls_list'}>
            {ball.balls.map(item =>
                <BallItem key={item.id} ball={item}/>
            )}
        </div>
    );
});

export default BallsList;