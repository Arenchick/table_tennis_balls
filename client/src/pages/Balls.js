import React, {useState} from 'react';
import TennisInput from "../components/UI/Input/TennisInput";
import BallsList from "../components/UI/Balls/BallsList";

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
            <BallsList/>
        </div>
    );
};

export default Balls;