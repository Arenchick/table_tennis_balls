import React, {useState} from 'react';
import Filter from "./Filter";
import filterPic from '../../../Assets/Filter.png'

const FilterList = () => {

    const [isHidden, setHidden] = useState(true)
    const [isReset, setReset] = useState(true)

    const changeHidden = () => {
        setHidden(!isHidden)
    }

    const reset = () => {
        setReset(true)

    }

    const filters = [
        {id: "1", name: 'Brand', properties: [
                {id: "11", name: 'Chlen'},
                {id: "21", name: 'Pizda'}
            ]},
        {id: "123", name: 'Type', properties: [
                {id: "12", name: 'Chlen'},
                {id: "22", name: 'Pizda'}
            ]},
        {id: "231", name: 'Star', properties: [
                {id: "1223", name: 'Chlen'},
                {id: '22314', name: 'Pizda'}
            ]},
        {id: "12312", name: 'ProducerCountry', properties: [
                {id: '1224323', name: 'Chlen'},
                {id: "223134534", name: 'Pizda'}
            ]},
    ]

    return (
        <div>
            <div className={'Filter_Button'}
                 onClick={changeHidden}>
                <img src={filterPic}
                     width={20}
                     height={20}/>
                <p>Фильтры</p>
            </div>
            <div hidden={isHidden}>
                <div className={'Filter_Container'}>
                    <div className={'Filter_List'}>
                        {filters.map(filter =>
                            <Filter key={filter.id} filter={filter} reset={reset}/>
                        )}
                    </div>
                    <div className={'Filter_Reset_Button'}
                         onClick={reset}>
                        <p>Сбросить</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterList;