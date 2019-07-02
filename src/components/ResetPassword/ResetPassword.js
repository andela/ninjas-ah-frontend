import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input, Button, Form, Img } from '../common';
import { resetPassword } from '../../actions/user/passwordActions';
import Logo from '../../assets/images/logo_ah_secondo.png';
import './ResetPassword.scss';

class ResetPassword extends Component {
  state = {
    form: {
      password: '',
      confirmPassword: ''
    },
    loading: false
  };

  handleChange = (e) => {
    const { form } = this.state;
    this.setState({ form: { ...form, [e.target.name]: e.target.value } });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { form: { password, confirmPassword } } = this.state;
    const {
      resetPassword,
      match: { params: { token } }
    } = this.props;
    if (!password || !confirmPassword) {
      return toast.error('Please fill the form..');
    }
    if (password !== confirmPassword) {
      return toast.error('The passwords are not matching');
    }

    const { message } = await resetPassword({
      password,
      confirmPassword,
      token
    });
    this.setState({ form: { password: '', confirmPassword: '' } });
    return message;
  };

  render() {
    const { form, loading } = this.state;
    return (
      <div className="container">
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        <Link to="/">
          <Img imgSrc={Logo} alt="log" width="300px" imgClass="center" />
        </Link>
        <div className="ResetPasswordForm large-screen-3 medium-screen-4 small-screen-4">
          <Form formTitle="Choose a new password" onSubmit={this.handleSubmit}>
            <p className="paragraph">
              Password must include at least 8 characters including at least 1 upper, lower case
              letter, 1 number and 1 special character.
            </p>

            <div className="small-screen-12">
              <Input
                name="password"
                type="password"
                inputClass="radius-5 medium-text"
                placeholder="New password"
                onChange={this.handleChange}
                value={form.password}
              />
              <Input
                name="confirmPassword"
                type="password"
                inputClass="radius-5 medium-text"
                placeholder="Retype new password"
                onChange={this.handleChange}
                value={form.confirmPassword}
              />
            </div>
            <div className="large-screen-4">
              <div className="">
                <Button type="submit" text="Signup" onClick={e => e} loading={loading}>
                  Update Password
                </Button>
                <Link to="/login">
                  <span className="xxxlarge-h-margin">Login</span>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  isLoading: PropTypes.bool,
  resetPassword: PropTypes.func,
  match: PropTypes.object
};

export default connect(
  null,
  { resetPassword }
)(ResetPassword);