import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { BaseLayout } from '@/component/layout/BaseLayout';
import SignInPage from '@/page/auth/signIn/SignInPage';
import HomePage from '@/page/home/HomePage';
import AboutPage from '@/page/about/AboutPage';
import { RoutePath } from './types';
import { PrivateRoute } from './PrivateRoute';

const BaseRouter = () => {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          {/* 로그인 없이 접근 가능한 Route */}
          <Route path={[RoutePath.AuthRoot, RoutePath.SignIn]}>
            <SignInPage />
          </Route>
          {/* 로그인 후 Route */}
          <PrivateRoute path={RoutePath.About}>
            <AboutPage />
          </PrivateRoute>
          <PrivateRoute path={[RoutePath.Root, RoutePath.Home]}>
            <HomePage />
          </PrivateRoute>
        </Switch>
      </BaseLayout>
    </Router>
  );
};

export { BaseRouter };
