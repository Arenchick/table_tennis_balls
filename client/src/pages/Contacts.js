import React from 'react';
import Moshkov from "../../src/Assets/moshkov.jpg"
const Contacts = () => {
    return (
        <div style={{display:"flex"}}>
            <img weight={700} height={500} src={Moshkov} alt=""/>
            <div>
                <span>Мы находимся по адресу ебашкина карабашкина
            не звоните мне и не пешите</span>
                <span>не звоните и не пишите</span>
            </div>


        </div>
    );
};

export default Contacts;