import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

export default class Layout extends Component {
  state = { screenHeight: window.innerHeight - 150 };

  componentDidMount = () => {
    window.addEventListener('resize', () => this.setState({ screenHeight: window.innerHeight - 150 }));
  };

  render() {
    const { screenHeight } = this.state;
    const { children } = this.props;
    return (
      <div className="Layout">
        <Header />
        <div style={{ minHeight: screenHeight }}>{children}</div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = { children: PropTypes.any };
