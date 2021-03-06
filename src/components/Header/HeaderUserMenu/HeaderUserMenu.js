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
  faBookmark
} from '@fortawesome/free-solid-svg-icons';
import './HeaderUserMenu.scss';
import { logout } from '../../../actions/user';

class HeaderUserMenu extends Component {
  logout = (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  };

  render() {
    const selector = document.querySelector('.HeaderUserImage');
    const { isAuth, username, firstName, lastName } = this.props;
    return (
      <div
        className="HeaderUserMenu"
        style={{ left: (selector && selector.offsetLeft - 140) || 0 }}
      >
        <div className="username">
          {username || (firstName && lastName && `${firstName} ${lastName}`) || 'Welcome'}
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
              <Link to="/profile/list/bookmarks">
                <FontAwesomeIcon icon={faBookmark} /> Bookmarks
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/forgot-password">Change password</Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link className="logout" to="/logout" onClick={this.logout}>
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
  logout: PropTypes.func,
  isAuth: PropTypes.bool,
  className: PropTypes.string,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string
};

HeaderUserMenu.defaultProps = { isAuth: false };

const mapStateToProps = ({
  user: {
    isAuth,
    profile: { username, firstName, lastName, role }
  }
}) => ({
  isAuth,
  username,
  firstName,
  lastName,
  role
});

export default connect(
  mapStateToProps,
  { logout }
)(HeaderUserMenu);
