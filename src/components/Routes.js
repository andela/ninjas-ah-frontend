import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ForgotPassword from './ResetPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';

export const Routes = () => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} />} />
    <Route exact path="/forgot-password" render={props => <ForgotPassword {...props} />} />
    <Route exact path="/reset-password/:token" render={props => <ResetPassword {...props} />} />
  </Switch>
);

export default Routes;
