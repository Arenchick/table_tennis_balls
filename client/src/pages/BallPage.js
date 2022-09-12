import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import Container from "../components/UI/Container/Container";
import {Context} from "../index";
import basketPicture from "../Assets/Basket.png";
import {fetchTypes} from "../http/typeApi";
import {fetchBrands} from "../http/brandApi";
import {fetchProducerCountries} from "../http/producerCountryApi";
import {fetchStars} from "../http/starApi";

const BallPage = () => {

    const {id} = useParams()

    const {ballStore} = useContext(Context)
    const {filterStore} = useContext(Context)
    let currentBall = {}

    ballStore.balls.map(ball => {
        if (ball.id == id){
            currentBall = JSON.parse(JSON.stringify(ball));
        }

    })


    const star =fetchStars()

    console.log(star)
    // console.log(type)
    return (
        <Container >
            <div
                style={{ width:240, height: 240, backgroundSize: 'cover', fontSize:64,
                    display: "flex"
            }}
            >
                {currentBall.name}
                <img
                    width={187.5}
                    height={187.5}
                    src={process.env.REACT_APP_API_URL + currentBall.image}/>

            </div>
            <span>type: {} </span> <br/>
            <span>star: </span>


        </Container>
    );
};

export default BallPage;