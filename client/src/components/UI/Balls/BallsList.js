import React, {useContext, useEffect} from 'react';
import BallItem from "./BallItem";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {fetchBalls} from "../../../http/ballApi";

const BallsList = observer(() => {

    const {ball} = useContext(Context)
    const {filterStore} = useContext(Context)

    useEffect(()=>{
       fetchBalls(
           filterStore.type.allSelectedId,
           filterStore.brand.allSelectedId,
           filterStore.star.allSelectedId,
           filterStore.producerCountry.allSelectedId
       ).then(data => ball.setBalls(data))
    },[
        JSON.stringify(filterStore.type.allSelectedId),
        JSON.stringify(filterStore.brand.allSelectedId),
        JSON.stringify(filterStore.star.allSelectedId),
        JSON.stringify(filterStore.producerCountry.allSelectedId)
    ])

    return (
        <div className={'balls_list'}>
            {ball.balls.map(item =>
                <BallItem key={item.id} ball={item}/>
            )}
        </div>
    );
});

export default BallsList;