import React, {useEffect, useState} from 'react';
import {fetchAboutText} from "../http/textApi";

const About = () => {

    useEffect(()=>{
        fetchAboutText().then(data=>{
            setText(data)
        })
    },[])

    const [text, setText] = useState('')

    return (
        <div style={{textAlign: "center"}}>
            <h2 className={'Basket_Order_List_Title'}>О нас</h2>
            <p>{text}</p>
        </div>
    );
};

export default About;