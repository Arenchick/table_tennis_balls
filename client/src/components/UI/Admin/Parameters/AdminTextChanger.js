import React, {useState} from 'react';
import TennisInput from "../../Input/TennisInput";
import GreenButton from "../../Buttons/GreenButton";
import {changeAboutText, changeContactText} from "../../../../http/textApi";

const AdminTextChanger = () => {

    const AboutChange = e => {
        changeAboutText(aboutText).then(data => {
            alert("Изменено")
        })
    }
    const ContactChange = e => {
        changeContactText(ContactText).then(data => {
            alert("Изменено")
        })
    }

    const [aboutText, setAboutText] = useState('')
    const [ContactText, setContactText] = useState('')

    return (
        <div className={'Admin_Text'}>
            <textarea placeholder='О нас...'
                      className={'Input Auth_Input'}
                         onChange={e =>setAboutText(e.target.value)}/>
            <div style={{marginBottom: "50px"}} className={'Admin_BallCreateButtonContainer'}>
                <GreenButton text='Добавить' click={(event)=>{AboutChange(event)}}/>
            </div>
            <textarea placeholder='Контакты...'
                      className={'Input Auth_Input'}
                         onChange={e =>setContactText(e.target.value)}/>
            <div className={'Admin_BallCreateButtonContainer'}>
                <GreenButton text='Добавить' click={(event)=>{ContactChange(event)}}/>
            </div>
        </div>
    );
};

export default AdminTextChanger;