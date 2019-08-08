import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faInfoCircle, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import './UsersList.scss';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import { Alert, Img, Button, ConfirmModal } from '../../common';
import { deleteUser, editProfile } from '../../../actions/user';

export class UsersList extends Component {
  state = {
    message: '',
    errors: {},
    activateUserLoading: {},
    activateUserAccountButton: '',
    userAccountToDelete: 0,
    deleteUserLoading: {},
    deleteUserConfirmModalStyle: 'none',
    deleteUserAccountButton: ''
  };

  componentWillReceiveProps = (nextProps) => {
    const { loading } = nextProps;

    this.setState(prevState => ({
      ...prevState,
      deleteUserLoading: (loading && prevState.deleteUserLoading) || {},
      activateUserLoading: (loading && prevState.activateUserLoading) || {}
    }));
  };

  confirmDeleteUser = (userId, key) => {
    this.setState(prevState => ({
      ...prevState,
      deleteUserConfirmModalStyle: 'block',
      userAccountToDelete: userId,
      deleteUserAccountButton: key
    }));
  };

  closeModal = modal => this.setState(prevState => ({ ...prevState, [modal]: 'none' }));

  deleteUserAccount = () => {
    const { deleteUser } = this.props;
    const { userAccountToDelete, deleteUserAccountButton } = this.state;
    this.setState(prevState => ({
      ...prevState,
      deleteUserConfirmModalStyle: 'none',
      deleteUserLoading: { [deleteUserAccountButton]: { loading: true } }
    }));
    return deleteUser(userAccountToDelete);
  };

  activateAccount = (userId, activateUserAccountButton) => {
    const { editProfile } = this.props;
    this.setState(prevState => ({
      ...prevState,
      activateUserLoading: { [activateUserAccountButton]: { loading: true } }
    }));
    return editProfile({ isActive: true }, userId);
  };

  render() {
    const { listOfUsers, maxUsersPerPage } = this.props;
    const {
      message,
      errors,
      activateUserLoading,
      deleteUserLoading,
      deleteUserConfirmModalStyle
    } = this.state;

    return (
      <div className="UsersList">
        {(message || errors.message) && (
          <Alert
            alertType={(message && 'success') || (errors.message && 'danger')}
            message={message || errors.message}
          />
        )}
        <ConfirmModal
          showModal={deleteUserConfirmModalStyle}
          message="Do you want to delete this account?"
          onClickYes={this.deleteUserAccount}
          onClickNo={() => this.closeModal('deleteUserConfirmModalStyle')}
        />
        {(listOfUsers || []).map((user, key) => (key + 1 <= maxUsersPerPage && (
              <div
                key={key}
                className="border b-light radius-1 small-v-margin small-padding shadow-1"
              >
                <div className="small-screen-1">
                  <div className="medium-padding">#{user.id}</div>
                  <Img
                    imgSrc={user.image || profileImagePlaceHolder}
                    imgClass="radius-6"
                    maxWidth="50px"
                    minWidth="45px"
                  />
                </div>
                <div className="small-screen-3">
                  <div>
                    <br />
                    {user.firstName} {user.lastName}
                    <br />
                    <i className="bold block medium-v-padding">
                      {(user.username && `@${user.username}`) || ''}
                    </i>
                  </div>
                  <span className="inline-block small-padding">
                    <Link
                      to={`/users/${user.id}`}
                      className="button light shadow-1 border b-light-grey small-padding radius-2"
                    >
                      Details <FontAwesomeIcon icon={faInfoCircle} />
                    </Link>
                  </span>
                  <span className="inline-block small-padding">
                    <Link
                      to={`/users/${user.id}/edit`}
                      className="button shadow-1 border b-light-grey small-padding yellow radius-2"
                    >
                      Edit <FontAwesomeIcon icon={faEdit} />
                    </Link>
                  </span>
                  <span className="inline-block small-padding">
                    {user.isActive ? (
                      <Button
                        loadingIconSize={18}
                        onClick={() => this.confirmDeleteUser(user.id, key)}
                        loading={deleteUserLoading[key] ? deleteUserLoading[key].loading : false}
                        buttonClass="delete-user-button button shadow-1 border b-light-grey small-padding danger radius-2 text-white"
                      >
                        Delete <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    ) : (
                      <Button
                        loadingIconSize={18}
                        onClick={() => this.activateAccount(user.id, key)}
                        loading={
                          activateUserLoading[key] ? activateUserLoading[key].loading : false
                        }
                        buttonClass="activate-user-button button shadow-1 border b-light-grey small-padding success radius-2 text-white"
                      >
                        Activate <FontAwesomeIcon icon={faCheck} />
                      </Button>
                    )}
                  </span>
                </div>
                <div className="divider" />
              </div>
        ))
            || '')}
      </div>
    );
  }
}

UsersList.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  maxUsersPerPage: PropTypes.number,
  listOfUsers: PropTypes.array,
  deleteUser: PropTypes.func,
  editProfile: PropTypes.func
};

const mapStateToProps = ({ user: { deleteUser: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { deleteUser, editProfile }
)(UsersList);
