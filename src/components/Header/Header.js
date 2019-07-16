import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import siteLogo from '../../assets/images/logo_ah_secondo.png';
import siteLogoSmall from '../../assets/images/logo_ah_small.png';
import { Img, Button } from '../common';
import HeaderUserMenu from './HeaderUserMenu/HeaderUserMenu';
import HeaderUserImage from './HeaderUserImage/HeaderUserImage';

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
        <div className="container">
          <div className="small-screen-1 medium-screen-2 large-screen-2">
            <div className="logo  hide-on-small">
              <Link to="/">
                <Img imgSrc={siteLogo} className="border b-light" alt="Authors Haven" />
              </Link>
            </div>
            <div className="logo hide-on-medium hide-on-large">
              <Link to="/">
                <Img imgSrc={siteLogoSmall} alt="Authors Haven" width="60px" />
              </Link>
            </div>
          </div>
          <div className="small-screen-3 medium-screen-2 large-screen-2 right-align">
            {window.location.pathname !== '/search' ? (
              <Link to="/search" className="button header-search-button  white">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </Link>
            ) : (
              ''
            )}
            <Button buttonClass="button header-notification-button white">
              <FontAwesomeIcon icon={faBell} size="lg" /> <span className="number">{10}</span>
            </Button>
            <span className="wrap-header-user-button">
              <Button buttonClass="button header-user-button white" onClick={this.toggleUserMenu}>
                <HeaderUserImage />
              </Button>
              {showUserMenu ? <HeaderUserMenu /> : ''}
            </span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isAuth: PropTypes.bool,
  location: PropTypes.object,
  pathname: PropTypes.string
};

const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });

export default connect(mapStateToProps)(Header);
