import React, {useContext, useEffect, useState} from 'react';
import {getAllBaksetBalls} from "../http/BasketApi";
import {Context} from "../index";
import BasketBallsList from "../components/UI/Basket/BasketBallsList";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {

    const {user} = useContext(Context)

    const [basketBalls, setBasketBalls] = useState([])

    useEffect(()=>{
        getAllBaksetBalls(user.user.id).then(data =>{
            setBasketBalls(data)
        })
    },[])

    return (
        <div>
            <BasketBallsList basketBalls={basketBalls}/>
        </div>
    );
});

export default Basket;