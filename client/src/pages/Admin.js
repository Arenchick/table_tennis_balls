import React, {useContext, useEffect} from 'react';
import AdminParameter from "../components/UI/Admin/Parameters/AdminParameter";
import {Context} from "../App";
import {fetchTypes} from "../http/typeApi";
import {fetchBrands} from "../http/brandApi";
import {fetchStars} from "../http/starApi";
import {fetchProducerCountries} from "../http/producerCountryApi";
import TennisPhoneInput from "../components/UI/Input/TennisPhoneInput";
import TennisInput from "../components/UI/Input/TennisInput";
import GreenButton from "../components/UI/Buttons/GreenButton";

const Admin = () => {

    const {adminParametersStore} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => adminParametersStore.setType(data))
        fetchBrands().then(data => adminParametersStore.setBrand(data))
        fetchStars().then(data => adminParametersStore.setStar(data))
        fetchProducerCountries().then(data => adminParametersStore.setProducerCountry(data))
    },[])

    return (
        <div style={{display:"flex", justifyContent:'center'}}>
            <div style={{maxWidth:"400px"}}>
                <h2>Характеристики:</h2>
                <AdminParameter parameter={adminParametersStore.type}/>
                <AdminParameter parameter={adminParametersStore.brand}/>
                <AdminParameter parameter={adminParametersStore.star}/>
                <AdminParameter parameter={adminParametersStore.producerCountry}/>
                {/*<GreenButton text={'Get'} click={(event)=>{console.log(adminParametersStore.brand.properties[adminParametersStore.brand.selectedId-1])}}/>*/}
            </div>
            <div>
                <TennisInput placeholder='Название'/>
                <TennisInput placeholder='Цена'/>
                <TennisInput placeholder='Кол-во'/>
                <TennisInput placeholder='Изображение' type="file"/>
                <GreenButton text='Добавить' click={(event)=>{console.log('Add')}}/>
            </div>
        </div>
    );
};

export default Admin;