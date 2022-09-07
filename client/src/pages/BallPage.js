import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Container from "../components/UI/Container/Container";
import {Context} from "../index";

const BallPage = () => {

    const {id} = useParams()

    const {ballStore} = useContext(Context)

    let currentBall = {}

    ballStore.balls.map(ball => {
        if (ball.id == id){
            currentBall = ball
            console.log(currentBall)
        }

    })

    return (
        <Container >
            <h2>{currentBall.name}</h2>
            <div

                style={{ width:240, height: 240, backgroundSize: 'cover', fontSize:64}}>
            </div>
            <div></div>

        </Container>
    );
};

export default BallPage;