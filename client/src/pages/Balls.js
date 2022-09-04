import React, {useState} from 'react';
import TennisInput from "../components/UI/Input/TennisInput";

const Balls = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const inputOnChange = (event) => {
        console.log(event.target.value)
        setSearchQuery(event.target.value)
    }

    return (
        <div>
            <TennisInput
                value = {searchQuery}
                onChange = {inputOnChange}
                placeholder={'Поиск'}
            />
        </div>
    );
};

export default Balls;