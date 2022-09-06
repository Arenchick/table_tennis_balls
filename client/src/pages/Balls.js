import React, {useState} from 'react';
import TennisInput from "../components/UI/Input/TennisInput";
import BallsList from "../components/UI/Balls/BallsList";
import FilterList from "../components/UI/Filter/FilterList";

const Balls = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const inputOnChange = (event) => {
        setSearchQuery(event.target.value)
    }

    return (
        <div>
            <TennisInput
                value = {searchQuery}
                onChange = {inputOnChange}
                placeholder={'Поиск'}
            />
            <FilterList/>
            <BallsList/>
        </div>
    );
};

export default Balls;