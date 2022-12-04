import React from 'react';
import TennisInput from "../Input/TennisInput";
import TennisPhoneInput from "../Input/TennisPhoneInput";

const AuthForm = ({email,setEmail,name,setName,password,setPassword,phone,setPhone,isLogin}) => {

    const emailFormat = e => {
        if (e.target.value.includes('@') && e.target.value.includes('.'))
            setEmail(e.target.value)
    }

    const phoneFormat = e => {
        let value = e.target.value

        value = value.replace(/_/g, '')

        if (value.length === 18)
            setPhone(value)
    }

    return (
        <div style={{width: '50%'}}>
            {!isLogin ?
                <div>
                    <TennisInput inputtype={'auth'} placeholder="Введите ваше имя..."
                                 value={name}
                                 onChange={e => setName(e.target.value)}
                                 type="text"/>
                    <TennisPhoneInput placeholder="Номер телефона"
                                      onChange={phoneFormat}
                                      // value={phone}
                                      inputtype={'auth'}/>
                </div>
                : null

            }
            <TennisInput inputtype={'auth'} type="text" placeholder="Введите ваш email..."
                         // value={email}
                         onChange={emailFormat}/>
            <TennisInput inputtype={'auth'} placeholder="Введите ваш пароль..."
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                         type="password"/>
        </div>
    );
};

export default AuthForm;