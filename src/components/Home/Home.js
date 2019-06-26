import React, { Component } from 'react';
import Layout from '../Layout';

export default class Home extends Component {
  state = { message: 'Welcome to Authors Haven' };

  render() {
    const { message } = this.state;
    return (
      <Layout>
        <div className="Home">{message}</div>
      </Layout>
    );
  }
}
