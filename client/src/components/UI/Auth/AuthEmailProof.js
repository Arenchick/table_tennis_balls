import React from 'react';
import TennisInput from "../Input/TennisInput";

const AuthEmailProof = ({registration, code}) => {

    const checkCode = e => {
        if (e.target.value == code)
        {
            registration()
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '50%'}}>
                <TennisInput inputtype={'auth'} placeholder="Код подтверждения"
                             type='number'
                             onChange={checkCode}/>
            </div>
        </div>
    );
};

export default AuthEmailProof;