import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Notification from './Profile/Settings/NotificationsComponent/Notification';

export const Routes = () => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} />} />
    <Route
      exact
      path="/profile/settings/notifications"
      render={props => <Notification {...props} />}
    />
  </Switch>
);

export default Routes;
