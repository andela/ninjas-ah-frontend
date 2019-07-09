import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import SocialMediaAuth from './SocialMediaAuth';
import Home from './Home';
import Notification from './Profile/Settings/NotificationsComponent/Notification';
import Signup from './Signup';

const Routes = ({ isAuth }) => (
  <Switch>
    <Route
      exact
      path="/profile/settings/notifications"
      render={props => <Notification {...props} />}
    />
    <Route exact path="/" render={props => <Home {...props} isAuth={isAuth} />} />
    <Route exact path="/auth" render={props => <SocialMediaAuth {...props} />} />
    <Route exact path="/signup" render={props => <Signup {...props} />} />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool };
Routes.defaultProps = { isAuth: false };

export const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });
export default connect(mapStateToProps)(Routes);
