import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import { socialAuth } from '../../actions/user';
import { Alert, SocialMediaButton, Form, Img } from '../common';
import logo from '../../assets/images/logo_ah_secondo.png';

export class SocialMediaAuth extends Component {
  state = {
    loading: true,
    errors: {}
  };

  componentDidMount = async () => {
    const { location, getUser, errors } = this.props;
    const { id, token, code, email, username } = queryString.parse(location.search);

    if (id && token) {
      await getUser({ id, token });
    } else if (code && (email || username)) {
      this.setState({
        errors: {
          ...errors,
          email: email && 'Email already used',
          username: username && 'Username already used'
        }
      });
    }
    this.setState({ loading: false });
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, ...nextProps.errors } });
  };

  render() {
    const { profile } = this.props;
    const { loading, errors } = this.state;

    return (
      <div className="container">
        <div className="center-align">
          {Object.keys(errors).length ? (
            <div className="large-padding">
              <Alert
                message={
                  errors.token || errors.user || errors.email || errors.username || errors.message
                }
                alertType="danger"
              />
            </div>
          ) : (
            ''
          )}
          <Link to="/">
            <Img imgSrc={logo} width="300px" imgClass="center image" />
          </Link>
          <br />
          {loading ? (
            <BeatLoader
              css={css`
                display: block;
                margin: 0 auto;
                border-color: red;
                padding-bottom: 15px;
                margin-bottom: 30px;
              `}
              size={50}
              color="#f9d342"
              loading={loading}
            />
          ) : (
            ''
          )}
          {!loading && !Object.keys(errors).length && Object.keys(profile).length ? (
            <Redirect to="/profile" />
          ) : (
            ''
          )}
          <div className="container xxlarge-v-padding">
            <Form formTitle=" ">
              <div className="center-align xxlarge-v-padding">
                <SocialMediaButton name="google" size={68} />
                <SocialMediaButton name="twitter" size={70} />
                <SocialMediaButton name="facebook" size={70} />
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

SocialMediaAuth.defaultProps = { location: { search: '' } };

SocialMediaAuth.propTypes = {
  profile: PropTypes.object,
  getUser: PropTypes.func.isRequired,
  location: PropTypes.any,
  errors: PropTypes.object,
  message: PropTypes.string
};

const mapStateToProps = ({
  user: {
    profile,
    getUser: { message, errors }
  }
}) => ({ profile, message, errors });

const mapDispatchToProps = dispatch => ({ getUser: payload => dispatch(socialAuth(payload)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialMediaAuth);
