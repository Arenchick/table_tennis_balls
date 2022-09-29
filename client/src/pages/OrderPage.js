import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {getAllBasketBalls} from "../http/BasketApi";
import BasketOrderList from "../components/UI/Basket/BasketOrderList";
import TennisInput from "../components/UI/Input/TennisInput";
import {sendMail} from "../http/mailApi";

const OrderPage = () => {
    const {user} = useContext(Context)

    const [allBasketBalls, setAllBasketBalls] = useState([])
    const [allPrice, setAllPrice] = useState(0)

    const [textMessage, setTextMessage] = useState('')

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

    //
    // useEffect(()=>{
    //     sendMail(user.user.email, textMessage)
    // },[textMessage])

    const send = () => {
        // sendMail(user.user.email, 'jhgugjhgjhg')
        sendMail('Arenchik1@yandex.ru','hvjh').then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            Ваш заказ:
            <div className={'Basket_Page'}>
                <BasketOrderList basketBalls={allBasketBalls}/>
                {allPrice}
            </div>
            В ближайшее время с вами свяжется наш курьер.
            <button onClick={send}/>
        </div>
    );
};

export default OrderPage;