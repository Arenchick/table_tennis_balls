import React, {useContext, useEffect, useState} from 'react';
import {changeBasketBallCount, deleteOneBasketBall, getAllBaksetBalls} from "../http/BasketApi";
import {Context} from "../index";
import BasketBallsList from "../components/UI/Basket/BasketBallsList";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {

    const {user} = useContext(Context)

    const [allBasketBalls, setAllBasketBalls] = useState([])
    const [selectedBasketBalls, setSelectedBasketBalls] = useState([])
    const [allPrice, setAllPrice] = useState(0)

    useEffect(()=>{
        getAllBaksetBalls(user.user.id).then(data =>{
            setAllBasketBalls([...data])
            setSelectedBasketBalls([...data])

           let price = 0

            data.forEach(basketBall => {
                price = price + basketBall.ball.price*basketBall.count
            })

            setAllPrice(price)
        })
    },[])

    useEffect(()=>{
        let price = 0

        allBasketBalls.forEach(basketBall => {
            price = price + basketBall.ball.price*basketBall.count
        })

        // select

        setAllPrice(price)
    },[allBasketBalls])

    const changeBallCount = (ballId, newCount) => {
        changeBasketBallCount(ballId,newCount).then(data => {

            const index = allBasketBalls.map(basketBall => basketBall.ball.id).indexOf(ballId)
            let count = data

            if (count > allBasketBalls[index].ball.count)
                count = allBasketBalls[index].ball.count
            let newBalls = allBasketBalls
            newBalls[index].count = count

            setAllBasketBalls([...newBalls])
        })
    }

    const deleteBasketBall = (basketBallId) => {
        deleteOneBasketBall(basketBallId).then(data => {
            getAllBaksetBalls(user.user.id).then(data => {
                setAllBasketBalls(data)
            })
        })
    }

    const select = (basketBall) => {
        if (!selectedBasketBalls.includes(basketBall))
            setSelectedBasketBalls([...selectedBasketBalls,basketBall])

        let newPrice = allPrice + basketBall.ball.price*basketBall.count
        setAllPrice(newPrice)
    }

    const unselect = (basketBall) => {
        if (selectedBasketBalls.includes(basketBall)){
            let newSelectedBasketBalls = selectedBasketBalls
            newSelectedBasketBalls.splice(selectedBasketBalls.indexOf(basketBall),1)
            setSelectedBasketBalls([...newSelectedBasketBalls])
        }

        let newPrice = allPrice - basketBall.ball.price*basketBall.count
        setAllPrice(newPrice)
    }

    return (
        <div>
            <BasketBallsList basketBalls={allBasketBalls} deleteBasketBall={deleteBasketBall} changeCount={changeBallCount} select={select} unselect={unselect}/>
            <div>
                {selectedBasketBalls.map(basketBall => basketBall.ball.name)}
                {allPrice}
            </div>
        </div>
    );
});

export default Basket;