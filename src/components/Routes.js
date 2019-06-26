import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import SocialMediaAuth from './SocialMediaAuth';
import Home from './Home';
import Signup from './Signup';
import Notification from './Profile/Settings/NotificationsComponent/Notification';
import Login from './Login';
import Profile from './Profile';

const Routes = ({ isAuth }) => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} isAuth={isAuth} />} />
    <Route exact path="/auth" render={props => <SocialMediaAuth {...props} />} />
    <Route exact path="/signup" render={props => <Signup {...props} />} />
    <Route exact path="/profile" render={props => <Profile {...props} />} />
    <Route exact path="/login" render={props => <Login {...props} />} />
    <Route
      exact
      path="/profile/settings/notifications"
      render={props => <Notification {...props} />}
    />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool };
Routes.defaultProps = { isAuth: false };

export const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });
export default connect(mapStateToProps)(Routes);
