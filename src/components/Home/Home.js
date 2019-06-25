import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    message: 'Welcome to Authors Haven'
  };

  render() {
    const { message } = this.state;
    return <div>{message}</div>;
  }
}
