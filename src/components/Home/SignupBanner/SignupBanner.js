import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import signupBanner from '../../../assets/images/welcome_cover.jpg';
import './SignupBanner.scss';

export class SignupBanner extends Component {
  state = { welcome: 'Welcome to Authors Haven' };

  render() {
    const { welcome } = this.state;

    const { isAuth, profile } = this.props;
    return (
      <section className="white signup-banner">
        <div className="container">
          <div className="small-screen-4 medium-screen-4 large-screen-2">
            <div className="large-padding">
              <br />
              {isAuth ? (
                <div className="large-text">
                  Hi, {profile.firstName} {profile.lastName}
                </div>
              ) : (
                ''
              )}
              <h1 className="text-primary xxlarge-text">{welcome}</h1>
              <div className="text-grey">Everyone has something to share</div>
              <br />
              <h2 className="text-grey nobold  medium-text">Learn, Grow & Educate</h2>
              <br />
              <br />
              {isAuth ? (
                <div>
                  <Link to="/profile" className="button bold radius-5 yellow">
                    <FontAwesomeIcon icon={faUserAlt} /> {''} Go to Profile
                  </Link>{' '}
                  <Link
                    to="/profile/article/new"
                    className="button bold text-black radius-5 light-grey"
                  >
                    <FontAwesomeIcon icon={faPen} /> Write article
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/signup" className="button bold radius-5 yellow">
                    Sign Up
                  </Link>{' '}
                  <Link to="/login" className="button bold text-black radius-5 light-grey">
                    Login
                  </Link>
                </div>
              )}
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="small-screen-4 medium-screen-2 large-screen-2 hide-on-medium hide-on-small">
            <div className="image">
              <img src={signupBanner} alt="Welcome to Authors Haven" />
            </div>
          </div>
          <div className="divider" />
        </div>
      </section>
    );
  }
}
SignupBanner.propTypes = { isAuth: PropTypes.bool, profile: PropTypes.object };
export const mapStateToProps = ({ user: { isAuth, profile } }) => ({ isAuth, profile });

export default connect(
  mapStateToProps,
  null
)(SignupBanner);
