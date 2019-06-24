import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

export const Routes = () => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} />} />
  </Switch>
);

export default Routes;
