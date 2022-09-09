import React from 'react';

const FilterItem = ({property,
                     filterName,
                     setSelectedId = () => {console.log('None function')},
                     removeSelectedId = () => {console.log('None function')},
                     inputType = 'checkbox'}
) => {

    const setSelect = (checekd) => {
        if(checekd)
            setSelectedId(property.id)
        else
            removeSelectedId(property.id)
    }

    return (
        <div>
            <label>
                <input className={'Filter_Input'}
                       name = {filterName}
                       type={inputType}
                       onInput={(event) => setSelect(event.target.checked)}
                       value={'value'}/>
                <span className={'Filter_Input_Span'}>{property.value}</span>
            </label>
        </div>
    );
};

export default FilterItem;