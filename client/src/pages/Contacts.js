import React, {useEffect, useState} from 'react';
import {fetchContactText} from "../http/textApi";

const Contacts = () => {

    useEffect(()=>{
        fetchContactText().then(data=>{
            setText(data)
        })
    },[])

    const [text, setText] = useState('')

    return (
        <div style={{textAlign: "center"}}>
            <h2 className={'Basket_Order_List_Title'}>Контакты</h2>
            <p>{text}</p>
        </div>
    );
};

export default Contacts;