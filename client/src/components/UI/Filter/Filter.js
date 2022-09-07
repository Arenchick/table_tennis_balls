import React from 'react';
import FilterItem from "./FilterItem";

const Filter = ({filter}) => {
    return (
        <div className={'Filter'}>
            <div>
                {filter.name}
            </div>
            {filter.properties.map(property =>
                <FilterItem key={property.id}
                            property={property}
                            filterName={filter.name}
                            setSelectedId={filter.setSelectedId}
                            removeSelectedId={filter.removeSelectedId}/>
            )}
        </div>
    );
};

export default Filter;