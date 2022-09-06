import React, {useContext} from 'react';

const FilterItem = ({property,filterName}) => {
    return (
        <div>
            <label>
                <input className={'Filter_Input'}
                       name = {filterName}
                       type="checkbox"
                       onInput={(event) => {console.log(event.target.checked)}}
                       value={'value'}/>
                <span className={'Filter_Input_Span'}>{property}</span>
            </label>
        </div>
    );
};

export default FilterItem;