import React, {useContext, useState} from 'react';
import {createBrand} from "../../../../http/brandApi";
import {createType} from "../../../../http/typeApi";
import {createStar} from "../../../../http/starApi";
import {createProducerCountry} from "../../../../http/producerCountryApi";
import TennisInput from "../../Input/TennisInput";
import GreenButton from "../../Buttons/GreenButton";
import {Context} from "../../../../App";

const AdminParameterCreate = ({parameterName}) => {

    const {adminParametersStore} = useContext(Context)

    const [value, setValue] = useState('')

    const CreateParameter = (event) => {
        switch (parameterName) {
            case 'Тип':
                createType(value).then(data=>{
                })
                break
            case 'Бренд':
                createBrand(value).then(data=>{
                })
                break
            case 'Звезды':
                createStar(value).then(data=>{
                })
                break
            case 'Страна':
                createProducerCountry(value).then(data=>{
                })
                break
        }
    }

    return (
        <div style={{display:"flex"}}>
            <TennisInput value={value}
                         onChange={e => setValue(e.target.value)}
                         placeholder={"Введите название параметра"}/>
            <GreenButton text={'Добавить'} click={(event)=>{CreateParameter(event)}}/>
        </div>
    );
};

export default AdminParameterCreate;