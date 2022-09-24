import React, {useContext, useEffect, useState} from 'react';
import {changeBasketBallCount, deleteOneBasketBall, getAllBasketBalls} from "../http/BasketApi";
import {Context} from "../index";
import BasketBallsList from "../components/UI/Basket/BasketBallsList";
import {observer} from "mobx-react-lite";
import BuyButton from "../components/UI/Buttons/BuyButton";
import {useHistory} from "react-router-dom";
import {ORDER_PAGE_ROUTE} from "../utils/Consts";
import BasketOrderItem from "../components/UI/Basket/BasketOrderItem";
// import  "../../../server/index";
const Basket = observer(() => {

    const history = useHistory()

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

    useEffect(()=>{
        let price = 0

        allBasketBalls.forEach(basketBall => {
            if (basketBall.selected)
                price = price + basketBall.ball.price*basketBall.count
        })

        setAllPrice(price)
    },[allBasketBalls])

    const changeBallCount = (ballId, newCount) => {
        changeBasketBallCount(user.user.id ,ballId,newCount).then(data => {

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

            let balls = [...allBasketBalls]
            let index = balls.map(ball => ball.id).indexOf(basketBallId)
            balls.splice(index,1)

            setAllBasketBalls(balls)
        })
    }

    const select = (basketBall) => {
        let balls = [...allBasketBalls]
        balls[balls.indexOf(basketBall)].selected = true
        setAllBasketBalls(balls)
    }

    const unselect = (basketBall) => {
        let balls = [...allBasketBalls]
        balls[balls.indexOf(basketBall)].selected = false
        setAllBasketBalls(balls)
    }

    const orderClick = (event) => {
        history.push(`${ORDER_PAGE_ROUTE}`)
        // transporter.sendMail(mailOptions)
        // sendAll()

    }


    return (
        <div className={'Basket_Page'}>
            <BasketBallsList basketBalls={allBasketBalls} deleteBasketBall={deleteBasketBall} changeCount={changeBallCount} select={select} unselect={unselect}/>
            <div className={'Basket_Order_List'}>
                {/*<h2 className={'Basket_Order_List_Title'}>Заказ</h2>*/}
                {/*{allBasketBalls.map(basketBall =>*/}
                {/*    <BasketOrderItem key={basketBall.id} basketBall={basketBall}/>*/}
                {/*)}*/}
                <h3 className={'Basket_Order_List_Price'}>{allPrice} р.</h3>
                <div className={'Basket_Order_List_Buy_Button_Container'}>
                    <BuyButton text={'Оформить'} click={orderClick}/>
                </div>
            </div>
        </div>
    );
});

export default Basket;