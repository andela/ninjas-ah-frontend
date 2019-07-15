import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Layout from '../Layout';
import ProfileUserDetails from './ProfileUserDetails';
import { Alert } from '../common';
import { updateProfile } from '../../actions/user';
import './Profile.scss';

export class Profile extends Component {
  state = { email: '', token: '', message: '', errors: {} };

  componentDidMount = () => {
    this.updateEmail();
  };

  updateEmail = () => {
    const { location, history, updateProfile, profile } = this.props;
    const { email, token } = queryString.parse(location.search);

    history.push('/profile');

    return (
      (email
        && updateProfile({ user: { ...profile, email } })
        && this.setState({ message: 'Email successfully updated' }))
      || (token && this.setState({ errors: { token: 'Failed to authenticate the token' } }))
    );
  };

  render() {
    const { message, errors } = this.state;
    return (
      <Layout>
        {message || errors.token ? (
          <div className="large-padding">
            <Alert
              message={message || errors.token}
              alertType={`${(message && 'success') || (errors.token && 'danger')}`}
            />
          </div>
        ) : (
          ''
        )}
        <div className="Profile">
          <div className="large-screen-4 medium-screen-4 small-screen-4">
            <ProfileUserDetails />
          </div>
        </div>
      </Layout>
    );
  }
}

Profile.defaultProps = { location: { search: '' }, history: { push: url => url } };
Profile.propTypes = {
  profile: PropTypes.object,
  location: PropTypes.any,
  history: PropTypes.any,
  updateProfile: PropTypes.func,
  push: PropTypes.func
};

const mapStateToProps = ({ user: { profile } }) => ({ profile });

export default connect(
  mapStateToProps,
  { updateProfile }
)(Profile);
