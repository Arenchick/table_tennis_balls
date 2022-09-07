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
           filterStore.type.selectedId,
           filterStore.brand.selectedId,
           filterStore.star.selectedId,
           filterStore.producerCountry.selectedId
       ).then(data => ball.setBalls(data))
    },[
        filterStore.type.selectedId,
        filterStore.brand.selectedId,
        filterStore.star.selectedId,
        filterStore.producerCountry.selectedId
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