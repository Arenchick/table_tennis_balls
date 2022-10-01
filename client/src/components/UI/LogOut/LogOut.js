import React, {useContext, useEffect} from 'react';
import {Context} from "../../../App";
import LogOutButton from "../Buttons/LogOutButton";
import {LOGIN_ROUTE} from "../../../utils/Consts";
import {useHistory} from "react-router-dom";
import UserStore from "../../../store/UserStore";

const LogOut = ({visible,setVisible}) => {

    const history = useHistory()

    const {user,setUser} = useContext(Context)

    if (!visible)
        return null;

    const LogOutClick = (event) => {
        event.preventDefault()

        setUser(new UserStore())
        user._isAuth = false
        localStorage.setItem('token', '')

        console.log(user)

        history.push(LOGIN_ROUTE)
    }

    return (
        <div className={'LogOut_Modal_Background'}
             onClick={(event)=> setVisible(event)}>
            <div className={'LogOut_Modal'}>
                <div className={'LogOut_Content'}>
                    <div className={'LogOut_User'}>
                        <p className={'LogOut_Name'}>{user.user.name}</p>
                        <p className={'LogOut_Email'}>{user.user.email}</p>
                    </div>
                    <LogOutButton click={(event) => LogOutClick(event)}/>
                </div>
            </div>
        </div>
    );
};

export default LogOut;