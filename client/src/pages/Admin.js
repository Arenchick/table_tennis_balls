import React, {useContext} from 'react';
import AdminParametersList from "../components/UI/Admin/Parameters/AdminParametersList";
import AdminBallCreate from "../components/UI/Admin/Parameters/AdminBallCreate";
import AdminBallList from "../components/UI/Admin/Parameters/AdminBallList";
import {Context} from "../App";
import {useHistory} from "react-router-dom";
import {BALLS_ROUTE} from "../utils/Consts";

const Admin = () => {

    const {user} = useContext(Context)
    const history = useHistory()

    if (user.user.role !== 'ADMIN')
        history.push(`${BALLS_ROUTE}`)

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <AdminParametersList/>
                <AdminBallCreate/>
            </div>
            <AdminBallList/>
        </div>
    );
};

export default Admin;