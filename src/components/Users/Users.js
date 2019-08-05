import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../Layout';
import './Users.scss';
import AdminMenu from '../Admin/AdminMenu';
import { Alert } from '../common';
import { getUsers } from '../../actions/user';
import UsersList from './UsersList';
import UsersPagination from './UsersPagination';
import UsersSearch from './UsersSearch';

export class Users extends Component {
  state = {
    maxUsersPerPage: 10,
    message: '',
    errors: {},
    listOfUsers: []
  };

  componentWillMount = () => {
    const { getUsers } = this.props;
    getUsers();
  };

  render() {
    const { listOfUsers } = this.props;
    const { maxUsersPerPage, message, errors } = this.state;

    return (
      <Layout>
        <div className="Users">
          {(message || errors.message) && (
            <Alert
              alertType={(message && 'success') || (errors.message && 'danger')}
              message={message || errors.message}
            />
          )}
          <AdminMenu />
          <div className="container">
            <h2>ALL USERS</h2>
            <div className="divider" />
            <UsersSearch />
            <div className="divider" />
            <UsersList listOfUsers={listOfUsers} maxUsersPerPage={maxUsersPerPage} />
            <div className="divider" />
            <UsersPagination listOfUsers={listOfUsers} maxUsersPerPage={maxUsersPerPage} />
          </div>
        </div>
      </Layout>
    );
  }
}

Users.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  listOfUsers: PropTypes.array,
  getUsers: PropTypes.func
};

const mapStateToProps = ({
  user: {
    listOfUsers,
    getUsers: { loading, message, errors }
  }
}) => ({
  loading,
  message,
  errors,
  listOfUsers
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
