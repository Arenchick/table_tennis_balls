import React from 'react';
import FilterItem from "./FilterItem";

const Filter = ({filter}) => {
    return (
        <div className={'Filter'}>
            <div>
                {filter.name}
            </div>
            <FilterItem filterName={filter.name} property={'Всё'} isChecked={true}/>
            {filter.properties.map(property =>
                <FilterItem key={filter.id} property={property.name} filterName={filter.name}/>
            )}
        </div>
    );
};

export default Filter;