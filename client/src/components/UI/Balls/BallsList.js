import React, {useContext, useEffect, useState} from 'react';
import BallItem from "./BallItem";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {fetchBalls} from "../../../http/ballApi";

const BallsList = observer(() => {

    const {ballStore} = useContext(Context)
    const {filterStore} = useContext(Context)

    const [filteredBalls,setFilteredBalls] = useState([])

    useEffect(()=>{
        fetchBalls().then(data => {
            ballStore.setBalls(data)
            setFilteredBalls(data)
        })
    },[])

    useEffect(()=>{
        setFilteredBalls(ballStore.balls.filter(ball =>
            (filterStore.type.allSelectedId.length===0 || filterStore.type.allSelectedId.includes(ball.ball_info.typeId)) &&
            (filterStore.brand.allSelectedId.length===0 || filterStore.brand.allSelectedId.includes(ball.ball_info.brandId)) &&
            (filterStore.star.allSelectedId.length===0 || filterStore.star.allSelectedId.includes(ball.ball_info.starId)) &&
            (filterStore.producerCountry.allSelectedId.length===0 || filterStore.producerCountry.allSelectedId.includes(ball.ball_info.producerCountryId))
       ))
    },[
        JSON.stringify(filterStore.type.allSelectedId),
        JSON.stringify(filterStore.brand.allSelectedId),
        JSON.stringify(filterStore.star.allSelectedId),
        JSON.stringify(filterStore.producerCountry.allSelectedId)
    ])

    return (
        <div className={'balls_list'}>
            {filteredBalls.map(item =>
                <BallItem key={item.id} ball={item}/>
            )}
        </div>
    );
});

export default BallsList;