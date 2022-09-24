import React, {useContext, useEffect, useState} from 'react';
import {changeBasketBallCount, deleteOneBasketBall, getAllBasketBalls} from "../http/BasketApi";
import {Context} from "../index";
import BasketBallsList from "../components/UI/Basket/BasketBallsList";
import {observer} from "mobx-react-lite";
import BuyButton from "../components/UI/Buttons/BuyButton";
import {useHistory} from "react-router-dom";
import {ORDER_PAGE_ROUTE} from "../utils/Consts";

const Basket = observer(() => {

    const history = useHistory()

    const {user} = useContext(Context)

    const [allBasketBalls, setAllBasketBalls] = useState([])
    const [selectedBasketBalls, setSelectedBasketBalls] = useState([])
    const [allPrice, setAllPrice] = useState(0)

    useEffect(()=>{
        getAllBasketBalls(user.user.id).then(data =>{
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
            getAllBasketBalls(user.user.id).then(data => {
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

    const orderClick = (event) => {
        history.push(`${ORDER_PAGE_ROUTE}`)
    }

    return (
        <div className={'Basket_Page'}>
            <BasketBallsList basketBalls={allBasketBalls} deleteBasketBall={deleteBasketBall} changeCount={changeBallCount} select={select} unselect={unselect}/>
            <div className={'Basket_Order_List'}>
                <h2 className={'Basket_Order_List_Title'}>Заказ</h2>
                {selectedBasketBalls.map(basketBall =>
                    <p key={basketBall.id} className={'Basket_Order_List_Ball_Name'}>• {basketBall.ball.name}, {basketBall.count}шт</p>
                )}
                <h3 className={'Basket_Order_List_Price'}>{allPrice} р.</h3>
                <div className={'Basket_Order_List_Buy_Button_Container'}>
                    <BuyButton text={'Оформить'} click={orderClick}/>
                </div>
            </div>
        </div>
    );
});

export default Basket;