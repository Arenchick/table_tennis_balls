import React, {useState} from 'react';
import AdminParameterCreate from "./AdminParameterCreate";
import FilterItem from "../../Filter/FilterItem";

const AdminParameter = ({parameter, setAdding}) => {

    const [isHidden, setHidden] = useState(true)
    const changeHidden = () => {
        setHidden(!isHidden)
    }

    return (
        <div>
            <div className={'Filter_Name'}
                 onClick={changeHidden}>
                {parameter.name}
            </div>
            <div hidden={isHidden}>
                <AdminParameterCreate
                    setAdding={setAdding}
                parameterName={parameter.name}/>
                {parameter.properties.map(property =>
                    <FilterItem key={property.id}
                                property={property}
                                filterName={parameter.name}
                                inputType={'radio'}
                                setSelectedId={parameter.setSelectedId}/>
                )}
            </div>
        </div>
    );
};

export default AdminParameter;