import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input, Button, Form, Img } from '../common';
import { regularExpression } from '../../helpers/user/formValidator';
import { forgotPasswordAction } from '../../actions/user';
import Logo from '../../assets/images/logo_ah_secondo.png';

class ForgotPassword extends Component {
  state = {
    email: '',
    loading: false
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (regularExpression.test(email)) {
      const isEmailSent = await this.props.forgotPasswordAction(email);
      this.setState({ email: '' });
      return isEmailSent;
    }

    return toast.error('Please enter your Email');
  };

  render() {
    const { loading } = this.props;
    const { email } = this.state;
    return (
      <div className="container">
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        <Link to="/">
          <Img imgSrc={Logo} alt="log" width="300px" imgClass="center" />
        </Link>
        <div className="ResetPasswordForm large-screen-3 medium-screen-4 small-screen-4">
          <Form formTitle="FORGOT PASSWORD" onSubmit={this.handleSubmit}>
            <p className="paragraph">
              Please confirm your email address below and we will send you an email.
            </p>
            <div className="small-screen-12">
              <Input
                name="email"
                type="email"
                inputClass="radius-5 medium-text"
                placeholder=" Email"
                onChange={this.handleChange}
                value={email}
              />
            </div>
            <div className="large-screen-4">
              <div>
                <Button type="submit" text="Signup" onClick={e => e} loading={loading}>
                  Reset Password
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  forgotPasswordAction: PropTypes.func
};

const mapStateToProps = ({ user: { forgotPassword: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { forgotPasswordAction }
)(ForgotPassword);
