import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../App";
import {getAllBasketBalls} from "../http/BasketApi";
import BasketOrderList from "../components/UI/Basket/BasketOrderList";
import TennisInput from "../components/UI/Input/TennisInput";
import {sendMail} from "../http/mailApi";
import {observer} from "mobx-react-lite";
import GreenButton from "../components/UI/Buttons/GreenButton";

const OrderPage = observer(() => {
    const {user, ballStore} = useContext(Context)

    const [allPrice, setAllPrice] = useState(0)

    useEffect(()=> {
       getAllPrice()
    },[])

    const getAllPrice = () => {
        let price = 0

        ballStore.orderedBalls.forEach(orderedBall => price += orderedBall.ball.price*orderedBall.count)

        setAllPrice(price)
    }

    const send = () => {
        sendMail('Arenchik1@yandex.ru','hvjh').then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            Ваш заказ:
            <div>
                <BasketOrderList basketBalls={ballStore.orderedBalls}/>
                <p>{allPrice} р.</p>
            </div>
            В ближайшее время с вами свяжется наш курьер.
            <GreenButton onClick={send} text={'Заказать'}/>
        </div>
    );
});

export default OrderPage;