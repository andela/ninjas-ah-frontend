import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import signupBanner from '../../../assets/images/signupBanner.png';

export default class SignupBanner extends Component {
  state = { welcome: 'Everyone has something to share' };

  render() {
    const { welcome } = this.state;
    return (
      <section>
        <div className="container">
          <div className="row radius-1">
            <div className="grey">
              <div className="small-screen-4 medium-screen-4 large-screen-2">
                <div className="large-padding">
                  <br />
                  <h1 className="text-white">{welcome}</h1>
                  <br />
                  <h2 className="text-white nobold">learn, Grow & Educate</h2>
                  <br />
                  <br />
                  <Link to="/" className="button bold radius-5 yellow">
                    Sign Up
                  </Link>
                  <Link to="/" className="button text-white radius-5 grey">
                    Login
                  </Link>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="small-screen-4 medium-screen-2 large-screen-2 hide-on-medium hide-on-small no-padding">
                <div className="image">
                  <img src={signupBanner} alt="Welcome to Authors Haven" />
                </div>
              </div>
              <div className="divider" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
