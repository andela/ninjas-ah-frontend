import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Signup.scss';
import {
  Input, Button, Form, SocialMediaButton
} from '../common';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      firstName, lastName, username, email, password, confirmPassword
    } = this.state;

    return (
      <div id="Signup">
        <div className="container">
          <Form formTitle="REGISTER" onSubmit={e => e}>
            <div className="large-screen-2 small-screen-12">
              <Input
                name="firstName"
                type="text"
                inputClass="radius-5 medium-text"
                placeholder="    First name"
                onChange={this.handleChange}
                value={firstName}
              />
            </div>
            <div className="large-screen-2 small-screen-12">
              <Input
                name="lastName"
                type="text"
                inputClass="radius-5 medium-text"
                placeholder="    Last name"
                onChange={this.handleChange}
                value={lastName}
              />
            </div>
            <Input
              name="username"
              type="text"
              inputClass="radius-5 medium-text"
              placeholder="    Username"
              onChange={this.handleChange}
              value={username}
            />
            <Input
              name="email"
              type="email"
              inputClass="radius-5 medium-text"
              placeholder="    Email"
              onChange={this.handleChange}
              value={email}
            />
            <div className="large-screen-2 small-screen-12">
              <Input
                name="password"
                type="password"
                inputClass="radius-5 medium-text"
                placeholder="    Password"
                onChange={this.handleChange}
                value={password}
              />
            </div>
            <div className="large-screen-2 small-screen-12">
              <Input
                name="confirmPassword"
                type="password"
                inputClass="radius-5 medium-text"
                placeholder="    Confirm password"
                onChange={this.handleChange}
                value={confirmPassword}
              />
            </div>
            <div className="large-screen-4">
              <br />
              <div className="">
                <Button text="Signup" onClick={e => e}>
                  Signup
                </Button>
                <div className="center-align">
                  <p className="text-grey">Or you can signup with:</p>
                  <SocialMediaButton name="google" size="38" />
                  <SocialMediaButton name="twitter" size="40" />
                  <SocialMediaButton name="facebook" size="40" />
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
