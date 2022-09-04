import React from 'react';

const TennisInput = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <input className={'tennisInput'} {...props}/>
        </div>
    );
};

export default TennisInput;