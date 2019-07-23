/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Layout from '../Layout';

class Bookmarks extends Component {
  state = { display: '' };

  render() {
    return (
      <Layout>
        <div className="container border b-light-grey">
          <div className="large-margin">Hello there {this.state.display}</div>;
        </div>
      </Layout>
    );
  }
}

export default Bookmarks;
