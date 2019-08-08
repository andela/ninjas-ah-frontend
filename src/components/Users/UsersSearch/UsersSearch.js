import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './UsersSearch.scss';
import { Form, Input } from '../../common';
import { getUsers, searchUser } from '../../../actions/user';

export class UsersSearch extends Component {
  state = {
    message: '',
    errors: {},
    userId: ''
  };

  handleChange = (e) => {
    const { getUsers, searchUser } = this.props;

    this.setState({
      userId: e.target.value,
      errors: {},
      loading: false,
      message: ''
    });

    return (e.target.value && searchUser(e.target.value)) || getUsers();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId } = this.state;
    const { searchUser } = this.props;
    return userId && searchUser(userId);
  };

  render() {
    const { userId } = this.state;

    return (
      <div className="UsersSearch">
        <Form onSubmit={this.handleSubmit} formClass="large-v-margin small-screen-4">
          <Input
            name="userId"
            type="text"
            value={userId}
            autoComplete="off"
            inputClass="medium-text radius-5"
            placeholder="Enter a username"
            onChange={this.handleChange}
          />
        </Form>
      </div>
    );
  }
}

UsersSearch.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  searchUser: PropTypes.func,
  getUsers: PropTypes.func
};

const mapStateToProps = ({ user: { searchUser: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { getUsers, searchUser }
)(UsersSearch);
