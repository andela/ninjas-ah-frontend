/* eslint-disable import/named */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {
  getNotification,
  getUnseenNotification,
  updateUnseenNotification
} from '../../../actions/notificationActions';
import { Button } from '../../common';
import Modal from './Modal/Modal';

class GetNotifications extends Component {
  state = {
    showModal: false,
    notification_number: 0
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ showModal: false });
    window.location.reload();
  };

  componentDidMount = () => {
    const { getNotification, getUnseenNotification } = this.props;
    getNotification();
    getUnseenNotification();
  };

  displayNotifications = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { unseenNotifications } = this.props;
    const { showModal } = this.state;
    return (
      <span className="header-notification-button left">
        <Button buttonClass="button white" onClick={this.displayNotifications} id="display">
          <FontAwesomeIcon icon={faBell} size="lg" />{' '}
          {unseenNotifications.length === 0 ? (
            ''
          ) : (
            <span className="number">{unseenNotifications.length}</span>
          )}
        </Button>
        <Modal closeModal={this.closeModal} showModal={showModal} />
      </span>
    );
  }
}
GetNotifications.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.string,
  message: PropTypes.string,
  notifications: PropTypes.array,
  unseenNotifications: PropTypes.array,
  getNotification: PropTypes.func.isRequired,
  getUnseenNotification: PropTypes.func.isRequired,
  updateUnseenNotification: PropTypes.func.isRequired
};
const mapStateToProps = ({
  notification: {
    notifications,
    unseenNotifications,
    getNotification: { errors, message, loading }
  }
}) => ({
  notifications,
  unseenNotifications,
  errors,
  message,
  loading
});

export default connect(
  mapStateToProps,
  { getNotification, getUnseenNotification, updateUnseenNotification }
)(GetNotifications);
