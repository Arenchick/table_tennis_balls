import React, {useContext, useEffect, useState} from 'react';
import {changeBasketBallCount, deleteOneBasketBall, getAllBaksetBalls} from "../http/BasketApi";
import {Context} from "../index";
import BasketBallsList from "../components/UI/Basket/BasketBallsList";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {

    const {user} = useContext(Context)

    const [basketBalls, setBasketBalls] = useState([])
    const [allPrice, setAllPrice] = useState(0)

    useEffect(()=>{
        getAllBaksetBalls(user.user.id).then(data =>{
            setBasketBalls(data)

           let price = 0

            data.forEach(basketBall => {
                price = price + basketBall.ball.price*basketBall.count
            })

            setAllPrice(price)
        })
    },[])

    useEffect(()=>{
        let price = 0

        basketBalls.forEach(basketBall => {
            price = price + basketBall.ball.price*basketBall.count
        })

        // select

        setAllPrice(price)
    },[basketBalls])

    const changeBallCount = (ballId, newCount) => {
        changeBasketBallCount(ballId,newCount).then(data => {

            const index = basketBalls.map(basketBall => basketBall.ball.id).indexOf(ballId)
            let count = data

            if (count > basketBalls[index].ball.count)
                count = basketBalls[index].ball.count
            let newBalls = basketBalls
            newBalls[index].count = count

            setBasketBalls([...newBalls])
        })
    }

    const deleteBasketBall = (basketBallId) => {
        deleteOneBasketBall(basketBallId).then(data => {
            getAllBaksetBalls(user.user.id).then(data => {
                setBasketBalls(data)
            })
        })
    }

    const select = (basketBall) => {
        let newPrice = allPrice + basketBall.ball.price*basketBall.count
        setAllPrice(newPrice)
    }

    const unselect = (basketBall) => {
        let newPrice = allPrice - basketBall.ball.price*basketBall.count
        setAllPrice(newPrice)
    }

    return (
        <div>
            <BasketBallsList basketBalls={basketBalls} deleteBasketBall={deleteBasketBall} changeCount={changeBallCount} select={select} unselect={unselect}/>
            <div>{allPrice}</div>
        </div>
    );
});

export default Basket;