import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import SocialMediaAuth from './SocialMediaAuth';
import Home from './Home';
import Signup from './Signup';
import Notification from './Profile/Settings/NotificationsComponent/Notification';
import Login from './Login';
import Profile from './Profile';
import ForgotPassword from './ResetPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import Article from './Articles/Article';
import CreateArticle from './Profile/Articles/CreateArticle/CreateArticle';
import PreviewArticle from './Profile/Articles/PreviewArticle';
import EditArticle from './Profile/Articles/EditArticle';
import SearchArticles from './SearchArticles';

const Routes = ({ isAuth }) => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} isAuth={isAuth} />} />
    <Route exact path="/auth" render={props => <SocialMediaAuth {...props} />} />
    <Route exact path="/signup" render={props => <Signup {...props} />} />
    <Route exact path="/profile" render={props => <Profile {...props} />} />
    <Route exact path="/login" render={props => <Login {...props} />} />
    <Route exact path="/search" render={props => <SearchArticles {...props} />} />
    <Route
      exact
      path="/profile/settings/notifications"
      render={props => <Notification {...props} />}
    />
    <Route exact path="/forgot-password" render={props => <ForgotPassword {...props} />} />
    <Route exact path="/reset-password/:token" render={props => <ResetPassword {...props} />} />
    <Route exact path="/article/:slug" render={props => <Article {...props} />} />
    <Route
      exact
      path="/profile/article/new"
      render={props => (isAuth ? (
          <CreateArticle {...props} />
      ) : (
          <Redirect to="/login?redirect=profile/article/new" />
      ))
      }
    />
    <Route
      exact
      path="/profile/article/preview/:slug"
      render={props => (isAuth ? <PreviewArticle {...props} /> : <Redirect to="/login" />)}
    />
    <Route
      exact
      path="/profile/article/edit/:slug"
      render={props => (isAuth ? <EditArticle {...props} /> : <Redirect to="/login" />)}
    />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool };
Routes.defaultProps = { isAuth: false };

export const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });
export default connect(mapStateToProps)(Routes);
