import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../App";
import BasketOrderList from "../components/UI/Basket/BasketOrderList";
import {observer} from "mobx-react-lite";
import GreenButton from "../components/UI/Buttons/GreenButton";
import {useHistory} from "react-router-dom";
import {BASKET_ROUTE} from "../utils/Consts";
import {sendMail} from "../http/mailApi";

const OrderPage = observer(() => {

    const history = useHistory()

    const {user, ballStore} = useContext(Context)

    if (ballStore.orderedBalls.length < 1)
        history.push(BASKET_ROUTE)

    const [allPrice, setAllPrice] = useState(0)

    const [isSended, setIsSended] = useState(false)

    useEffect(()=> {
       getAllPrice()
    },[])

    const getAllPrice = () => {
        let price = 0

        ballStore.orderedBalls.forEach(orderedBall => price += orderedBall.ball.price*orderedBall.count)

        setAllPrice(price)
    }

    const send = (event) => {
        let orderMailTextForAdmin = ''
        let orderMailText = 'Заказ:\n\n'

        ballStore.orderedBalls.forEach(orderedBall => {
            orderMailText += `• ${orderedBall.ball.name}, ${orderedBall.count} шт. -   ${orderedBall.count*orderedBall.ball.price} руб.\n`
        })

        orderMailText += `\nВсего: ${allPrice} руб.\n`
        orderMailTextForAdmin = `${orderMailText}`
        orderMailTextForAdmin += `\nНомер телефона заказчика: ${user.user.phone}\nПочта заказчика: ${user.user.email}`
        orderMailText += 'В ближайшее время мы с вами свяжимся'

        setIsSended(true)

        sendMail(user.user.email,
            orderMailText
        ).then(data => {
            sendMail(process.env.REACT_APP_EMAIL, orderMailTextForAdmin).then(data => console.log(''))
            setIsSended(true)
        })
    }

    return (
        <div>
            {!isSended ?
                    <div className={'Order_Page'}>
                        <h2>Ваш заказ:</h2>
                        <div>
                            <BasketOrderList basketBalls={ballStore.orderedBalls}/>
                        </div>
                        <div className={'Order_Page_Price_And_BuyButton'}>
                            <h4 className={'Order_Page_AllPrice'}>{allPrice} руб.</h4>
                            <GreenButton click={(event) => {
                                send(event)
                            }} text={'Заказать'}/>
                        </div>
                    </div> : <h3 style={{textAlign: "center"}}>Заказ успешно выполнен</h3>
            }
        </div>
    );
});

export default OrderPage;