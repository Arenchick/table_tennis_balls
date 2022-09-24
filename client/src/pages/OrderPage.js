import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {getAllBasketBalls} from "../http/BasketApi";
import BasketBallsList from "../components/UI/Basket/BasketBallsList";
import BasketOrderItem from "../components/UI/Basket/BasketOrderItem";
import BuyButton from "../components/UI/Buttons/BuyButton";
import BasketBallItem from "../components/UI/Basket/BasketBallItem";
import BasketOrderList from "../components/UI/Basket/BasketOrderList";

const OrderPage = () => {
    const {user} = useContext(Context)

    const [allBasketBalls, setAllBasketBalls] = useState([])
    const [allPrice, setAllPrice] = useState(0)

    useEffect(()=>{
        getAllBasketBalls(user.user.id).then(data =>{

            let balls = [...data]
            balls.forEach(ball => ball.selected = true)
            setAllBasketBalls([...balls])

            let price = 0
            balls.forEach(basketBall => {
                price = price + basketBall.ball.price*basketBall.count
            })
            setAllPrice(price)

        }).catch(error => {console.log(error.message)})
    },[user.user.id])
    return (
        <div>
            Ваш заказ:
            <div className={'Basket_Page'}>
                <BasketOrderList basketBalls={allBasketBalls}/>

            </div>
            В ближайшее время с вами свяжется наш курьер.
        </div>
    );
};

export default OrderPage;