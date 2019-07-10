import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Signup.scss';
import { Input, Button, Form, SocialMediaButton, Alert, Img } from '../common';
import { validateUser } from '../../helpers/validation';
import { signup } from '../../actions/user';
import logo from '../../assets/images/logo_ah_secondo.png';

export class Signup extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {},
    loading: false,
    message: ''
  };

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: '' },
      loading: false,
      message: ''
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signupUser } = this.props;
    const { errors, form } = this.state;
    const { confirmPassword, ...formData } = form;
    const formErrors = validateUser(form, 'newUser');

    this.setState({ errors: { ...errors, ...formErrors } });

    if (!Object.keys(formErrors).length) {
      await signupUser(formData);
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = this.state;
    this.setState({
      message: nextProps.message,
      errors: { ...errors, ...nextProps.errors }
    });
  };

  render() {
    const { loading } = this.props;
    const { form, message, errors } = this.state;

    return (
      <div className="Signup container">
        {(message || errors.message) && (
          <Alert
            alertType={(message && 'success') || (errors.message && 'danger')}
            message={message || errors.message}
          />
        )}
        <Link to="/">
          <Img imgSrc={logo} width="300px" imgClass="center image" />
        </Link>
        <div className="SignupForm large-screen-3 medium-screen-4 small-screen-4">
          <Form formTitle="REGISTER" onSubmit={this.handleSubmit}>
            <div className="large-screen-2 medium-screen-2 small-screen-4">
              <Input
                name="firstName"
                type="text"
                inputClass="medium-text radius-5"
                placeholder="First name"
                onChange={this.handleChange}
                value={form.firstName}
                error={errors.firstName}
                errorWidth={180}
              />
            </div>
            <div className="large-screen-2 medium-screen-2 small-screen-4">
              <Input
                name="lastName"
                type="text"
                inputClass="medium-text radius-5"
                placeholder="Last name"
                onChange={this.handleChange}
                value={form.lastName}
                error={errors.lastName}
                errorWidth={180}
              />
            </div>
            <div className="small-screen-4">
              <Input
                name="username"
                type="text"
                inputClass="medium-text radius-5"
                placeholder="Username"
                onChange={this.handleChange}
                value={form.username}
                error={errors.username}
                errorWidth={180}
              />
            </div>
            <div className="small-screen-4">
              <Input
                name="email"
                type="email"
                inputClass="medium-text radius-5"
                placeholder="Email"
                onChange={this.handleChange}
                value={form.email}
                error={errors.email}
                errorWidth={180}
              />
            </div>
            <div className="large-screen-2 medium-screen-2 small-screen-4">
              <Input
                name="password"
                type="password"
                inputClass="medium-text radius-5"
                placeholder="Password"
                onChange={this.handleChange}
                value={form.password}
                error={errors.password}
                errorWidth={180}
              />
            </div>
            <div className="large-screen-2 medium-screen-2 small-screen-4">
              <Input
                name="confirmPassword"
                type="password"
                inputClass="medium-text radius-5"
                placeholder="Confirm password"
                onChange={this.handleChange}
                value={form.confirmPassword}
                error={errors.confirmPassword}
                errorWidth={180}
              />
            </div>
            <div className="large-screen-4">
              <br />
              <Button type="submit" text="Signup" loading={loading}>
                Signup
              </Button>
              <div className="center-align">
                <p className="text-grey">Or you can signup with:</p>
                <SocialMediaButton name="google" size={38} />
                <SocialMediaButton name="twitter" size={40} />
                <SocialMediaButton name="facebook" size={40} />
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  signupUser: PropTypes.func
};

const mapStateToProps = ({ user: { signup: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

const mapDispatchToProps = dispatch => ({ signupUser: payload => dispatch(signup(payload)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
