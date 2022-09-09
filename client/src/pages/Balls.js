import React, {useContext, useEffect, useState} from 'react';
import TennisInput from "../components/UI/Input/TennisInput";
import BallsList from "../components/UI/Balls/BallsList";
import FilterList from "../components/UI/Filter/FilterList";
import {Context} from "../index";

const Balls = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const {filterStore} = useContext(Context)

    const inputOnChange = (event) => {
        setSearchQuery(event.target.value)
    }

    useEffect(()=>{
        filterStore.setSearchQuery(searchQuery.toLowerCase())
    },[searchQuery])

    return (
        <div>
            <TennisInput
                value = {searchQuery}
                onChange = {inputOnChange}
                placeholder={'Поиск'}
            />
            <div style={{display: "flex", justifyContent: "space-between",marginTop: "1rem"}}>
                <FilterList/>
                <BallsList/>
            </div>

        </div>
    );
};

export default Balls;