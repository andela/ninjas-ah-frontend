import React, { Component } from 'react';
import sitelogo from '../../assets/images/logo_ah_secondo.png';
import './Header.scss';

export default class Header extends Component {
  state = { display: '' };

  render() {
    const { display } = this.state;
    return (
      <header className="fixheader">
        <div className="container">
          <div className="row">
            <div className="small-screen-4 medium-screen-4 large-screen-2">
              <div className="logo ">
                <img src={sitelogo} alt="Authors Haven" />
                {display}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
