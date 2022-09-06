import React, {useContext} from 'react';
import {Context} from "../../../index";

const FilterItem = ({property,filterName}) => {

    const {filter} = useContext(Context)

    filter.setCheckbox(this)

    return (
        <div>
            <label>
                <input className={'Filter_Input'}
                       name = {filterName}
                       type="checkbox"
                       checked={isChecked}
                       onInput={() => {console.log(isChecked)}}
                       value={'value'}/>
                <span className={'Filter_Input_Span'}>{property}</span>
            </label>
        </div>
    );
};

export default FilterItem;