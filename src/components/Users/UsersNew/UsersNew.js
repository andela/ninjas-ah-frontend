import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../Layout';
import './UsersNew.scss';
import AdminMenu from '../../Admin/AdminMenu';
import { Form, Input, Button, Alert, CheckBox, RadioButton } from '../../common';
import { validateUser } from '../../../helpers/validation';
import { adminCreateUser } from '../../../actions/user';

export class UsersNew extends Component {
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
    message: '',
    showPermissions: 'hide',
    userType: 'normal',
    currentPermissions: {
      articles: [],
      comments: [],
      tags: [],
      users: []
    },
    permissions: {
      articles: ['read', 'create', 'edit', 'delete'],
      comments: ['read', 'create', 'edit', 'delete'],
      tags: ['read', 'create', 'edit', 'delete'],
      users: ['read', 'create', 'edit', 'delete'],
      permissions: ['read', 'create', 'edit', 'delete']
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = this.state;
    this.setState(prevState => ({
      ...prevState,
      message: nextProps.message,
      errors: { ...errors, ...nextProps.errors }
    }));

    return nextProps.message && this.setState({ form: {} });
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

  handleUserTypeChange = (e) => {
    const role = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      userType: role
    }));
  };

  handlePermissionsChange = (e) => {
    const { currentPermissions } = this.state;

    const permissions = {
      ...currentPermissions,
      [e.target.name]: e.target.checked
        ? [...(currentPermissions[e.target.name] || []), e.target.value]
        : currentPermissions[e.target.name].filter(permission => permission !== e.target.value)
    };

    this.setState(prevState => ({
      ...prevState,
      currentPermissions: permissions
    }));
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
    const { adminCreateUser } = this.props;
    const { errors, form, currentPermissions } = this.state;
    const { confirmPassword, ...formData } = form;
    const { userType: role, ...permissions } = currentPermissions;
    const formErrors = validateUser(form, 'newUser');

    this.setState({ errors: { ...errors, ...formErrors } });

    return Object.keys(formErrors).length
      ? window.scrollTo(0, 0)
      : adminCreateUser({ ...formData, role, permissions });
  };

  render() {
    const { loading } = this.props;
    const { form, showPermissions, permissions, message, errors } = this.state;

    return (
      <Layout>
        <div className="UsersNew">
          {(message || errors.message) && (
            <Alert
              alertType={(message && 'success') || (errors.message && 'danger')}
              message={message || errors.message}
            />
          )}
          <AdminMenu currentPage="newUser" />
          <div className="divider" />
          <div className="container">
            <h2>REGISTER USER</h2>
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
                    onChange={this.handleUserTypeChange}
                    name="userType"
                    value="normal"
                    label="Author"
                  />
                  <RadioButton
                    onChange={this.handleUserTypeChange}
                    name="userType"
                    value="admin"
                    label="Admin"
                  />
                </fieldset>
                <fieldset className="radius-2 block medium-v-margin">
                  <legend className="black radius-1 text-white large-h-padding">Permissions</legend>
                  {Object.keys(permissions).map((permission, key) => (
                    <fieldset key={`fieldset${key}`} className="radius-2 block medium-v-margin">
                      <legend className="light-grey capitalize radius-1 medium-text large-h-padding">
                        {permission}
                      </legend>
                      {(permissions.articles || []).map((val, key2) => (
                        <CheckBox
                          key={`CheckBox${key2}`}
                          name={permission}
                          value={val}
                          label={val}
                          onChange={this.handlePermissionsChange}
                        />
                      ))}
                    </fieldset>
                  ))}
                </fieldset>
              </div>
              <div className="large-screen-4">
                <br />
                <Button type="submit" loading={loading}>
                  Create
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

UsersNew.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  userType: PropTypes.string,
  adminCreateUser: PropTypes.func
};

const mapStateToProps = ({ user: { adminCreateUser: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { adminCreateUser }
)(UsersNew);
