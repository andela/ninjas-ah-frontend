import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';

export const Routes = () => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} />} />
    <Route exact path="/signup" render={props => <Signup {...props} />} />
  </Switch>
);

export default Routes;
