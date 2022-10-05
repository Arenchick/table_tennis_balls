import React from 'react';
import AdminParametersList from "../components/UI/Admin/Parameters/AdminParametersList";
import AdminParameterCreate from "../components/UI/Admin/Parameters/AdminParameterCreate";
import AdminBallCreate from "../components/UI/Admin/Parameters/AdminBallCreate";

const Admin = () => {

    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <AdminParametersList/>
            <AdminBallCreate/>
        </div>
    );
};

export default Admin;