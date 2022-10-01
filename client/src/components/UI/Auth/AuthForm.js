import React from 'react';
import TennisInput from "../Input/TennisInput";

const AuthForm = ({email,setEmail,name,setName,password,setPassword,isLogin}) => {
    return (
        <div style={{width: '50%'}}>
            <TennisInput inputtype={'auth'} type="text" placeholder="Введите ваш email..."
                         value={email}
                         onChange={e => setEmail(e.target.value)}/>
            {!isLogin ?
                <TennisInput inputtype={'auth'} placeholder="Введите ваше имя..."
                             value={name}
                             onChange={e => setName(e.target.value)}
                             type="text"/> : null
            }
            <TennisInput inputtype={'auth'} placeholder="Введите ваш пароль..."
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                         type="password"/>
        </div>
    );
};

export default AuthForm;