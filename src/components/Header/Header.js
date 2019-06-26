import React, { Component } from 'react';
import sitelogo from '../../assets/images/logo_ah_secondo.png';
import './Header.scss';
import { Form, Input } from '../common';

export default class Header extends Component {
  state = { searchArticle: '' };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { searchArticle } = this.state;
    return (
      <header className="fixheader">
        <div className="container">
          <div className="row">
            <div className="small-screen-4 medium-screen-4 large-screen-2">
              <div className="logo">
                <img src={sitelogo} alt="Authors Haven" />
              </div>
            </div>
            <div className="hide-on-small hide-on-medium large-screen-2">
              <Form formClass="large-screen-2 hide" onSubmit={e => e}>
                <Input
                  name="searchArticle"
                  type="text"
                  inputClass="radius-5 medium-text"
                  placeholder="Search"
                  onChange={this.handleChange}
                  value={searchArticle}
                />
              </Form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
