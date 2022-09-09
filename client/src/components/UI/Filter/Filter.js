import React from 'react';
import FilterItem from "./FilterItem";

const Filter = ({filter}) => {
    return (
        <div className={'Filter'}>
            <div className={'Filter_Name'}>
                {filter.name}
            </div>
            {filter.properties.map(property =>
                !filter.inputType ?
                <FilterItem key={property.id}
                            property={property}
                            filterName={filter.name}
                            setSelectedId={filter.setSelectedId}
                            removeSelectedId={filter.removeSelectedId}/> :
                <FilterItem key={property.id}
                            property={property}
                            filterName={filter.name}
                            inputType={filter.inputType}
                            setSelectedId={filter.setSelectedId}/>
            )}
        </div>
    );
};

export default Filter;