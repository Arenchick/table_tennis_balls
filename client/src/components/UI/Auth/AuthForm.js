import React from 'react';
import TennisInput from "../Input/TennisInput";
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

const AuthForm = ({email,setEmail,name,setName,password,setPassword,phone,setPhone,isLogin}) => {
    return (
        <div style={{width: '50%'}}>
            {!isLogin ?
                <div>
                    <TennisInput inputtype={'auth'} placeholder="Введите ваше имя..."
                                 value={name}
                                 onChange={e => setName(e.target.value)}
                                 type="text"/>
                    <TennisInput inputtype={'auth'} placeholder="Номер телефона"
                                 value={phone}
                                 onChange={e => setPhone(e.target.value)}
                                 type="text"/>
                </div>
                : null

            }
            <TennisInput inputtype={'auth'} type="text" placeholder="Введите ваш email..."
                         value={email}
                         onChange={e => setEmail(e.target.value)}/>
            <TennisInput inputtype={'auth'} placeholder="Введите ваш пароль..."
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                         type="password"/>
        </div>
    );
};

export default AuthForm;