import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//@ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                !!localStorage.getItem('TOKEN') ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;