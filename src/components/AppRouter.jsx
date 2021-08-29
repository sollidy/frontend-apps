import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context';
import { privatRoutes, publicRoutes } from '../router';
// import Loader from './UI/Loader/Loader';

const AppRouter = () => {

    const { isAuth } = useContext(AuthContext)
    return (
        isAuth
            ?
            <Switch>
                {privatRoutes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/posts' />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/login' />
            </Switch>
    );
}

export default AppRouter;
