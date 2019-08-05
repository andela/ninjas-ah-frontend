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
import PublishedArticles from './Profile/Articles/MyArticles/Published';
import SearchArticles from './SearchArticles';
import Bookmarks from './Bookmarks/Bookmarks';
import Users from './Users';
import UsersNew from './Users/UsersNew';
import UserDetails from './Users/UsersDetails';
import EditUser from './Users/UsersEdit';
import ArticlesReportsList from './Articles/ArticlesReportsList';

const Routes = ({ isAuth, role }) => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} />} />
    <Route exact path="/auth" render={props => <SocialMediaAuth {...props} />} />
    <Route exact path="/signup" render={props => <Signup {...props} />} />
    <Route exact path="/login" render={props => <Login {...props} />} />
    <Route exact path="/search" render={props => <SearchArticles {...props} />} />

    {/* profile routes */}
    <Route
      exact
      path="/profile"
      render={props => (isAuth ? <Profile {...props} /> : <Redirect to="/login" />)}
    />
    <Route
      exact
      path="/profile/settings/notifications"
      render={props => (isAuth ? <Notification {...props} /> : <Redirect to="/login" />)}
    />
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
      path="/profile/list/bookmarks"
      render={props => (isAuth ? <Bookmarks {...props} /> : <Redirect to="/login" />)}
    />
    <Route
      exact
      path="/profile/article/edit/:slug"
      render={props => (isAuth ? <EditArticle {...props} /> : <Redirect to="/login" />)}
    />
    <Route
      exact
      path="/profile/articles"
      render={props => (isAuth ? (
          <PublishedArticles {...props} />
      ) : (
          <Redirect to="/login?redirect=profile/articles" />
      ))
      }
    />

    {/* users routes */}
    <Route
      exact
      path="/users"
      render={props => (isAuth && role === 'admin' ? <Users {...props} /> : <Redirect to="/login?redirect=users" />)
      }
    />
    <Route
      exact
      path="/users/new"
      render={props => (isAuth && role === 'admin' ? (
          <UsersNew {...props} />
      ) : (
          <Redirect to="/login?redirect=users/new" />
      ))
      }
    />
    <Route
      exact
      path="/users/:userId"
      render={props => (isAuth && role === 'admin' ? (
          <UserDetails {...props} />
      ) : (
          <Redirect to={`/login?redirect=users/${props.match.params.userId}`} />
      ))
      }
    />
    <Route
      exact
      path="/users/:userId/edit"
      render={props => (isAuth && role === 'admin' ? (
          <EditUser {...props} />
      ) : (
          <Redirect to={`/login?redirect=users/${props.match.params.userId}/edit`} />
      ))
      }
    />

    {/* reset password routes */}
    <Route exact path="/forgot-password" render={props => <ForgotPassword {...props} />} />
    <Route exact path="/reset-password/:token" render={props => <ResetPassword {...props} />} />

    {/* article reports routes */}
    <Route
      exact
      path="/articles/reports"
      render={props => (isAuth && role === 'admin' ? (
          <ArticlesReportsList {...props} />
      ) : (
          <Redirect to="/articles/reports" />
      ))
      }
    />
    <Route
      exact
      path="/articles/:slug/reports"
      render={props => (isAuth && role === 'admin' ? (
          <ArticlesReportsList {...props} />
      ) : (
          <Redirect to={`/login?redirect=articles/${props.match.params.slug}/reports`} />
      ))
      }
    />

    {/* one article routes */}
    <Route exact path="/articles/:slug" render={props => <Article {...props} />} />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool, role: PropTypes.string, match: PropTypes.object };
Routes.defaultProps = { match: { params: {} }, isAuth: false, role: 'normal' };

export const mapStateToProps = ({
  user: {
    isAuth,
    profile: { role }
  }
}) => ({ isAuth, role });
export default connect(mapStateToProps)(Routes);
