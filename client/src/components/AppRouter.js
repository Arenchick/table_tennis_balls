import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {BALLS_ROUTE} from "../utils/Consts";

const AppRouter = () => {
    //
    const isAuth = true;
    //

    return (
        <div>
        <Switch>
            {isAuth && authRoutes.map(route =>
                <Route component={route.component} path={route.path} exact />
            )}
            {publicRoutes.map(route =>
                <Route component={route.component} path={route.path} exact />
            )}
            <Redirect to={BALLS_ROUTE}/>
        </Switch>
        </div>
    );
};

export default AppRouter;