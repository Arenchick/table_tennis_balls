import React, {useContext, useEffect} from 'react';
import AdminParameter from "./AdminParameter";
import {Context} from "../../../../App";
import {fetchTypes} from "../../../../http/typeApi";
import {fetchBrands} from "../../../../http/brandApi";
import {fetchStars} from "../../../../http/starApi";
import {fetchProducerCountries} from "../../../../http/producerCountryApi";

const AdminParametersList = () => {

    const {adminParametersStore} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => adminParametersStore.setType(data))
        fetchBrands().then(data => adminParametersStore.setBrand(data))
        fetchStars().then(data => adminParametersStore.setStar(data))
        fetchProducerCountries().then(data => adminParametersStore.setProducerCountry(data))
    },[])

    return (
        <div>
            <h2>Характеристики:</h2>
            <AdminParameter parameter={adminParametersStore.type}/>
            <AdminParameter parameter={adminParametersStore.brand}/>
            <AdminParameter parameter={adminParametersStore.star}/>
            <AdminParameter parameter={adminParametersStore.producerCountry}/>
        </div>
    );
};

export default AdminParametersList;