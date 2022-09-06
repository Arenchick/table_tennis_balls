import React from 'react';

const FilterItem = ({property,filterName, isChecked = false}) => {

    return (
        <div>
            <label>
                <input className={'Filter_Input'}
                       name = {filterName}
                       type="radio"
                       defaultChecked={isChecked}
                       onInput={() => {console.log(filterName+property)}}
                       value={'value'}/>
                <span className={'Filter_Input_Span'}>{property}</span>
            </label>
        </div>
    );
};

export default FilterItem;