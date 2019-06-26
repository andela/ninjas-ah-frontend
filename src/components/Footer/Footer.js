import React from 'react';
import './Footer.scss';

const year = new Date().getFullYear();
const Footer = () => (
  <div className="Footer">
    <div className="divider" />
    <div>
      <div className="small-screen-4 large-v-padding center-align">
        @Copyright Ninjas Team, {year}
      </div>
    </div>
  </div>
);

export default Footer;
