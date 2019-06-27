import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { login } from '../../actions/user';
import './Login.scss';
import { Input, Button, Form, SocialMediaButton, Alert, Img } from '../common';
import Logo from '../../assets/images/logo_ah_secondo.png';

export class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    message: '',
    redirect: ''
  };

  componentDidMount() {
    const { location } = this.props;
    const { redirect } = queryString.parse(location.search);
    return this.setState({ redirect: redirect && `/${redirect}` });
  }

  componentWillReceiveProps(nextProps) {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, ...nextProps.errors } });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handeleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { login } = this.props;
    login({ email, password });
  };

  render() {
    const { profile, loading } = this.props;
    const { email, password, errors, redirect } = this.state;
    return (
      <div className="Login container">
        {Object.keys(errors).length ? (
          <Alert
            alertType="danger"
            message={errors.credentials || errors.account || errors.password || errors.email}
          />
        ) : (
          ''
        )}
        {!loading && Object.keys(profile).length ? <Redirect to={redirect || '/profile'} /> : ''}
        <Link to="/">
          <Img imgSrc={Logo} width="300px" imgClass="center" />
        </Link>
        <div id="Login">
          <div className="LoginForm large-screen-3 medium-screen-4 small-screen-4">
            <Form formTitle="LOGIN" className="login" onSubmit={this.handeleSubmit}>
              <div className="large-screen-4 medium-screen-4 small-screen-4">
                <Input
                  name="email"
                  type="text"
                  className="email"
                  inputClass="radius-5 medium-text"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={email}
                  isRequired={true}
                />
              </div>

              <div className="large-screen-4 medium-screen-4 small-screen-4">
                <Input
                  name="password"
                  type="password"
                  className="password"
                  inputClass="radius-5 medium-text"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                  isRequired={true}
                />
              </div>
              <Link
                to="/forgot-password"
                className="active small-text xlarge-h-padding forgot-Password"
              >
                Forgot Password?
              </Link>
              <div className="large-screen-4">
                <br />
                <div className="">
                  <Button type="submit" text="Login" loading={loading}>
                    Login
                  </Button>{' '}
                  <b>
                    <Link to="/signup" className="active">
                      {' '}
                      Register Now
                    </Link>
                  </b>
                  <div className="center-align xlarge-v-padding">
                    <p className="text-grey">Login with your social account</p>
                    <SocialMediaButton name="google" size={38} />
                    <SocialMediaButton name="twitter" size={40} />
                    <SocialMediaButton name="facebook" size={40} />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Login.defaultProps = { location: { search: '' }, profile: {} };

Login.propTypes = {
  loading: PropTypes.bool,
  profile: PropTypes.object,
  login: PropTypes.func,
  user: PropTypes.object,
  location: PropTypes.object,
  errors: PropTypes.object
};

const mapStateToProps = ({
  user: {
    login: { errors, message, loading },
    profile
  }
}) => ({
  errors,
  message,
  loading,
  profile
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
