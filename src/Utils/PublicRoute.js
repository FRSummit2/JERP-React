import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { getToken } from './Common';
import { getUser, getTokenExpiresTime } from './Common';
 
// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  console.log('hello ' + rest)
  console.log(rest)
  // From Route it send component and other objects and here we receive component as component and other objects as rest
  return (
    // <Route
    //   {...rest}
    //   render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
    // />
    <Route
      {...rest}
      render={(props) => 
        ( !getUser() || new Date().getTime() > new Date(getTokenExpiresTime()).getTime() ) ?
        <Component {...props} /> : 
        <Redirect to={{ pathname: '/' }} />}
    />
  )
}
 
export default PublicRoute;