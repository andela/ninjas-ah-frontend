import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faUserCircle,
  faSignOutAlt,
  faBookOpen,
  faCog,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import './HeaderUserMenu.scss';
import { logout as logoutHelper } from '../../../helpers';

class HeaderUserMenu extends Component {
  logout = (e) => {
    e.preventDefault();
    logoutHelper();
  };

  render() {
    const { isAuth, className, username, firstName, lastName } = this.props;
    return (
      <div className={className}>
        <div className="username">
          {username || (firstName && lastName && `${firstName} ${lastName}`) || ''}
        </div>
        <ul className="list-block left-align">
          {!isAuth && (
            <li>
              <Link to="/signup">
                <FontAwesomeIcon icon={faUserCircle} /> Sign up
              </Link>
            </li>
          )}

          {!isAuth && (
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} /> Sign in
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/profile">
                <FontAwesomeIcon icon={faUserCircle} /> Profile
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/profile/articles">
                <FontAwesomeIcon icon={faBookOpen} /> My Articles
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/profile/settings/notifications">
                <FontAwesomeIcon icon={faCog} /> Notifications
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/profile/followers">
                <FontAwesomeIcon icon={faUsers} /> Followers
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link className="logout" to="/" onClick={this.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Log out
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

HeaderUserMenu.propTypes = {
  isAuth: PropTypes.bool,
  className: PropTypes.string,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

HeaderUserMenu.defaultProps = { className: 'HeaderUserMenu' };
const mapStateToProps = ({
  user: {
    isAuth,
    profile: { username, firstName, lastName }
  }
}) => ({
  isAuth,
  username,
  firstName,
  lastName
});

export default connect(mapStateToProps)(HeaderUserMenu);
