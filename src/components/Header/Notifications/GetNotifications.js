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

  closeModal = () => {
    this.setState({ showModal: false });
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
    const { loading, unseenNotifications } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        <Button
          buttonClass="button header-notification-button right white"
          loading={loading}
          onClick={this.displayNotifications}
        >
          <FontAwesomeIcon icon={faBell} size="lg" />{' '}
          <span className="number">{unseenNotifications.length}</span>
        </Button>
        <Modal closeModal={this.closeModal} showModal={showModal} />
      </div>
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
