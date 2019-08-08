import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, Input, Alert, TextArea } from '../../../common';
import './ProfileEditForm.scss';
import { editProfile } from '../../../../actions/user';
import { validateUser } from '../../../../helpers/validation';

export class ProfileEditForm extends Component {
  state = {
    modalStyle: 'none',
    form: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: ''
    },
    editedForm: {},
    errors: {},
    message: ''
  };

  componentDidMount = () => {
    const { profile: { firstName, lastName, username, email, bio } } = this.props;
    this.setState({
      form: {
        firstName: firstName || '',
        lastName: lastName || '',
        username: username || '',
        email: email || '',
        bio: bio || ''
      }
    });
  };

  handleChange = (e) => {
    const { form, editedForm, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      editedForm: { ...editedForm, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: '' },
      message: ''
    });

    return e;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { editProfile } = this.props;
    const { errors, editedForm } = this.state;
    const { confirmPassword, ...formData } = editedForm;

    Object.keys(editedForm).forEach(key => editedForm[key] || delete editedForm[key]);

    const formErrors = validateUser(editedForm, 'updateUser');

    this.setState({ errors: { ...errors, ...formErrors } });

    if (!Object.keys(formErrors).length && Object.keys(editedForm).length) {
      editProfile(formData);
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = this.state;
    this.setState({ message: nextProps.message, errors: { ...errors, ...nextProps.errors } });
  };

  render() {
    const { loading } = this.props;
    const { form, errors, message } = this.state;
    return (
      <div className="ProfileEditForm">
        <div className="small-screen-4">
          {(message || errors.token || errors.authentication || errors.message) && (
            <Alert
              alertType={(message && 'success') || 'danger'}
              message={message || errors.token || errors.authentication || errors.message}
            />
          )}
        </div>
        <Form formClass="Form large-padding radius-4 small-screen-3" onSubmit={this.handleSubmit}>
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
          <div className="small-screen-4">
            <Button type="submit" loading={loading}>
              Edit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

ProfileEditForm.propTypes = {
  loading: PropTypes.bool,
  profile: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
  message: PropTypes.string,
  errors: PropTypes.object,
  editProfile: PropTypes.func
};

const mapStateToProps = ({
  user: {
    profile,
    editProfile: { loading, message, errors }
  }
}) => ({ profile, loading, message, errors });

export default connect(
  mapStateToProps,
  { editProfile }
)(ProfileEditForm);
