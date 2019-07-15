import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';
import siteLogo from '../../assets/images/logo_ah_secondo.png';
import siteLogoSmall from '../../assets/images/logo_ah_small.png';
import { Img, Button } from '../common';
import HeaderUserMenu from './HeaderUserMenu/HeaderUserMenu';
import HeaderUserImage from './HeaderUserImage/HeaderUserImage';
import Notification from './Notifications/GetNotifications';

class Header extends Component {
  state = { showUserMenu: false };

  componentDidMount = () => {
    window.document.addEventListener('click', (e) => {
      const { parentNode, classList } = e.srcElement;
      return (
        (classList || parentNode.classList)
        && !classList.contains('header-user-button')
        && !parentNode.classList.contains('HeaderUserImage')
        && this.setState({ showUserMenu: false })
      );
    });
  };

  toggleUserMenu = () => {
    const { showUserMenu } = this.state;
    this.setState({ showUserMenu: !showUserMenu });
  };

  render() {
    const { showUserMenu } = this.state;
    return (
      <header className="Header">
        <div className="small-screen-1 medium-screen-2 large-screen-2">
          <div className="logo hide-on-small">
            <Link to="/">
              <Img imgSrc={siteLogo} alt="Authors Haven" />
            </Link>
          </div>
          <div className="logo hide-on-medium hide-on-large">
            <Link to="/">
              <Img imgSrc={siteLogoSmall} alt="Authors Haven" width="60px" />
            </Link>
          </div>
        </div>
        <div className="small-screen-3 medium-screen-2 large-screen-2">
          <Button buttonClass="button header-user-button right white" onClick={this.toggleUserMenu}>
            <HeaderUserImage />
          </Button>
          <Notification />
          {showUserMenu ? <HeaderUserMenu /> : ''}
        </div>
      </header>
    );
  }
}

Header.propTypes = { isAuth: PropTypes.bool };

const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });

export default connect(mapStateToProps)(Header);
