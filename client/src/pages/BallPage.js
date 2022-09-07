
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Container from "../components/UI/Container/Container";
import {fetchOneBall} from "../http/ballApi";
const BallPage = () => {
    const [ball, setBall] = useState({info: []})
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        fetchOneBall(id).then(data => setBall(data))
    }, [])

    return (
        <Container >
            <h2>{ball.name}</h2>
            <div

                style={{ width:240, height: 240, backgroundSize: 'cover', fontSize:64}}>
            </div>
            <div></div>

        </Container>
    );
};

export default BallPage;