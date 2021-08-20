import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContainer } from '@/container/auth';
import { RoutePath } from './types';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }: any) => {
  const { isSignIn } = AuthContainer.useContainer();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignIn ? (
          children
        ) : (
          <Redirect
            to={RoutePath.SignIn}
          />
        )
      }
    />
  );
};

export { PrivateRoute };
