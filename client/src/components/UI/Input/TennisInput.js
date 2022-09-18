import React from 'react';

const TennisInput = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <input className={'searchInput'} {...props}/>
        </div>
    );
};

export default TennisInput;