import React from 'react';
import FilterItem from "./FilterItem";

const Filter = ({filter}) => {
    return (
        <div className={'Filter'}>
            <div>
                {filter.name}
            </div>
            {filter.properties.map(property =>
                <FilterItem key={property.id} property={property.value} filterName={filter.name}/>
            )}
        </div>
    );
};

export default Filter;