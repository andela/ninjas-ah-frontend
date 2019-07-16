import React from 'react';
import './Footer.scss';

const year = new Date().getFullYear();
const Footer = () => (
  <div id="footer" className="black">
    <div className="container">
      <div className="center-align text-white">
        Welcome to
        <br />
        <b>Authors Haven</b>
        <br /> &copy; Copyright Ninjas Team, {year}
      </div>
    </div>
  </div>
);

export default Footer;
