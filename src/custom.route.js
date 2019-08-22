import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

 
export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Redirect to="/dashboard" />
            : <Component {...props} />
    )} />
)