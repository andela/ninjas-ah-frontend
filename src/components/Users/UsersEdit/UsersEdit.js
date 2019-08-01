import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../Layout';
import './UsersEdit.scss';
import AdminMenu from '../../Admin/AdminMenu';
import { Form, Input, Button, TextArea, Alert, CheckBox, RadioButton } from '../../common';
import { validateUser } from '../../../helpers/validation';
import { getUser, editProfile } from '../../../actions/user';

export class UsersEdit extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
      role: ''
    },
    errors: {},
    loading: false,
    message: '',
    showPermissions: 'hide',
    currentPermissions: {
      articles: [],
      comments: [],
      tags: [],
      users: []
    }
  };

  componentWillMount = () => {
    const { getUser } = this.props;
    const { match: { params: { userId } } } = this.props;
    this.setState(prevState => ({ ...prevState, userId }));
    getUser(userId);
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors, form } = this.state;
    const { firstName, lastName, username, email, bio, role, permissions } = nextProps.currentUser;
    this.setState(prevState => ({
      ...prevState,
      message: nextProps.message,
      form: {
        firstName: firstName || form.firstName,
        lastName: lastName || form.lastName,
        username: username || form.username,
        email: email || form.email,
        bio: bio || form.bio,
        role: role || form.role
      },
      currentPermissions: permissions ? JSON.parse(permissions) : prevState.currentPermissions,
      errors: { ...errors, ...nextProps.errors }
    }));
  };

  handleChange = (e) => {
    const { form, errors } = this.state;

    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
      loading: false,
      message: ''
    });
  };

  handlePermissionsChange = (e) => {
    const { currentPermissions } = this.state;

    const permissions = {
      ...currentPermissions,
      [e.target.name]: e.target.checked
        ? [...(currentPermissions[e.target.name] || []), e.target.value]
        : currentPermissions[e.target.name].filter(permission => permission !== e.target.value)
    };

    this.setState({ currentPermissions: permissions });
  };

  togglePermissions = () => {
    const { showPermissions } = this.state;
    this.setState(prevState => ({
      ...prevState,
      showPermissions: showPermissions === 'hide' ? 'block' : 'hide'
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { editProfile } = this.props;
    const { userId, form, currentPermissions, errors } = this.state;
    Object.keys(form).forEach(key => form[key] || delete form[key]);
    const formErrors = validateUser(form, 'updateUser');

    this.setState({ errors: { ...errors, ...formErrors } });

    if (!Object.keys(formErrors).length) {
      editProfile({ ...form, permissions: currentPermissions }, userId);
    }
  };

  render() {
    const { permissions, loading } = this.props;
    const { form, showPermissions, currentPermissions, message, errors } = this.state;

    return (
      <Layout>
        <div className="UsersEdit">
          {(message || errors.message) && (
            <Alert
              alertType={(message && 'success') || (errors.message && 'danger')}
              message={message || errors.message}
            />
          )}
          <AdminMenu />
          <div className="divider" />
          <div className="container">
            <h2>EDIT USER</h2>
            <div className="divider" />
            <Form onSubmit={this.handleSubmit} formClass="large-v-margin small-screen-4">
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
              <div className="small-screen-4">
                <TextArea
                  name="bio"
                  textAreaClass="radius-5 medium-text textarea"
                  placeholder="Bio"
                  rows={6}
                  onChange={this.handleChange}
                  value={form.bio}
                  defaultValue={form.bio}
                  error={errors.bio}
                  errorWidth={250}
                />
              </div>
              <div className="divider" />
              <div className="divider" />
              <Button
                onClick={this.togglePermissions}
                buttonClass="show-permissions button light radius-2 small-padding shadow-1 border b-light-grey"
              >
                Role & Permissions{' '}
                <FontAwesomeIcon icon={showPermissions === 'hide' ? faChevronDown : faChevronUp} />
              </Button>
              <div className={`large-v-padding small-screen-4 ${showPermissions}`}>
                <fieldset className="radius-2 block medium-v-margin">
                  <legend className="black radius-1 text-white large-h-padding">Role</legend>
                  <RadioButton
                    onChange={this.handleChange}
                    name="role"
                    value="normal"
                    label="Author"
                    checked={form.role === 'normal'}
                  />
                  <RadioButton
                    onChange={this.handleChange}
                    name="role"
                    value="admin"
                    label="Admin"
                    checked={form.role === 'admin'}
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
              </div>
              <div className="large-screen-4">
                <br />
                <Button type="submit" loading={loading}>
                  Edit
                </Button>
              </div>
            </Form>
            <div className="divider" />
          </div>
        </div>
      </Layout>
    );
  }
}

UsersEdit.defaultProps = { currentUser: {}, match: { params: '' } };

UsersEdit.propTypes = {
  permissions: PropTypes.object,
  currentUser: PropTypes.object,
  match: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  userType: PropTypes.string,
  getUser: PropTypes.func,
  editProfile: PropTypes.func
};

const mapStateToProps = ({
  user: {
    permissions,
    currentUser,
    editProfile: { loading, message, errors }
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
  { getUser, editProfile }
)(UsersEdit);
