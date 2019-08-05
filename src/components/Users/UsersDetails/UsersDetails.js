import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import Layout from '../../Layout';
import './UsersDetails.scss';
import AdminMenu from '../../Admin/AdminMenu';
import { Alert, Img, RadioButton, CheckBox } from '../../common';
import { getUser } from '../../../actions/user';

export class UsersDetails extends Component {
  state = {
    message: '',
    errors: {},
    userId: ''
  };

  componentWillMount = () => {
    const { getUser } = this.props;
    const { match: { params: { userId } } } = this.props;
    this.setState(prevState => ({ ...prevState, userId }));
    getUser(userId);
  };

  render() {
    const { permissions, currentUser } = this.props;
    const currentPermissions = currentUser.permissions ? JSON.parse(currentUser.permissions) : {};
    const { userId, message, errors } = this.state;

    return (
      <Layout>
        <div className="UsersDetails">
          {(message || errors.message) && (
            <Alert
              alertType={(message && 'success') || (errors.message && 'danger')}
              message={message || errors.message}
            />
          )}
          <AdminMenu />
          <div className="container">
            <h2>
              USER DETAILS{' '}
              <Link
                className="small-padding shadow-1 border b-light-grey radius-2"
                to={`/users/${userId}/edit`}
              >
                Edit <FontAwesomeIcon icon={faEdit} />
              </Link>
            </h2>
            <div className="divider" />
            <div className="shadow-1 radius-2 small-screen-4 medium-padding">
              <div className="small-screen-4 medium-screen-4 large-screen-1 center-align">
                <Img
                  imgSrc={currentUser.image || profileImagePlaceHolder}
                  imgClass="radius-6"
                  maxWidth="200px"
                  minWidth="150px"
                />
              </div>
              <div className="small-screen-4 medium-screen-4 large-screen-3">
                <div className="medium-padding">
                  First name: <span className="bold capitalize">{currentUser.firstName}</span>
                </div>
                <div className="medium-padding">
                  Last name: <span className="bold capitalize">{currentUser.lastName}</span>
                </div>
                <div className="medium-padding">
                  Username: <span className="bold">{currentUser.username}</span>
                </div>
                <div className="medium-padding">
                  Email: <span className="bold">{currentUser.email}</span>
                </div>
                <div className="medium-padding">
                  Bio: <span className="bold">{currentUser.bio}</span>
                </div>
                <div className="medium-padding">
                  Role: <span className="bold">{currentUser.role}</span>
                </div>
              </div>
              <hr />
              <div className="divider" />
              <fieldset className="radius-2 block medium-v-margin">
                <legend className="black radius-1 text-white large-h-padding">Role</legend>
                <RadioButton
                  name="role"
                  value="normal"
                  label="Author"
                  checked={currentUser.role === 'normal'}
                />
                <RadioButton
                  name="role"
                  value="admin"
                  label="Admin"
                  checked={currentUser.role === 'admin'}
                />
              </fieldset>
              <fieldset className="radius-2 block medium-v-margin">
                <legend className="black radius-1 text-white large-h-padding">Permissions</legend>
                {Object.keys(permissions).map((permission, key) => (
                  <fieldset key={`fieldset${key}`} className="radius-2 block medium-v-margin">
                    <legend className="light-grey capitalize radius-1 medium-text large-h-padding">
                      {permission}
                    </legend>
                    {(permissions[permission] || []).map((val, key2) => (
                      <CheckBox
                        key={`CheckBox${key2}`}
                        name={permission}
                        value={val}
                        label={val}
                        onChange={this.handlePermissionsChange}
                        disabled="disabled"
                        checked={
                          (currentPermissions[permission]
                            && currentPermissions[permission].includes(val))
                          || false
                        }
                      />
                    ))}
                  </fieldset>
                ))}
              </fieldset>
              <div className="divider" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

UsersDetails.defaultProps = { currentUser: {}, match: { params: '' } };

UsersDetails.propTypes = {
  permissions: PropTypes.object,
  currentUser: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  match: PropTypes.object,
  getUser: PropTypes.func
};

const mapStateToProps = ({
  user: {
    permissions,
    currentUser,
    getUser: { loading, message, errors }
  }
}) => ({
  permissions,
  currentUser,
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { getUser }
)(UsersDetails);
