import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Modal.scss';
import {
  getNotification,
  getUnseenNotification,
  updateUnseenNotification,
  deleteNotification,
  markAllAsSeen
} from '../../../../actions/notificationActions';

class Modal extends Component {
  updateStatus = (val) => {
    const { updateUnseenNotification, getNotification } = this.props;
    updateUnseenNotification(val);
    if (val.status !== 'seen') {
      setTimeout(() => {
        getNotification();
      }, 100);
    }
  };

  deleteNotification = (val) => {
    const { deleteNotification } = this.props;
    deleteNotification(val);

    setTimeout(() => {
      getNotification();
    }, 100);
  };

  markAsSeen = () => {
    const { markAllAsSeen } = this.props;
    markAllAsSeen();
  };

  render() {
    const { notifications, showModal, closeModal } = this.props;
    return (
      <div className="container">
        <div className="card">
          <div id="modal" className={showModal ? '' : 'hide'}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="text-black center-align">
                <h2>Notification</h2>
              </div>
              <br />

              {notifications.length === 0 ? (
                <div>
                  <h3 className="center">No new notifications</h3>
                  <div className="divider" />
                </div>
              ) : (
                <div>
                  <div>
                    <span>Mark all notification as seen:</span>
                    <span>
                      <button
                        className="border b-light medium-margin radius-2"
                        onClick={this.markAsSeen}
                      >
                        <FontAwesomeIcon icon={faCheckDouble} size="2x" className="text-success" />
                      </button>
                    </span>
                  </div>
                  <div>
                    {notifications.map((val, key) => (
                      <div key={key} className={val.status === 'unseen' ? 'row light-red' : 'row'}>
                        <div role="button" onClick={() => this.updateStatus(val)}>
                          <div key={key} className="wrap-notification">
                            <div className="notification-tick">
                              {val.status === 'unseen' ? (
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  size="1x"
                                  className="text-light-grie small-padding left"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faCheckDouble}
                                  size="1x"
                                  className="left small-padding text-light-grey"
                                />
                              )}
                              <FontAwesomeIcon
                                icon={faTrash}
                                size="1x"
                                id={`deleteNotification${key}`}
                                className="left small-padding text-danger cursor-pointer"
                                onClick={() => this.deleteNotification(val)}
                              />
                            </div>
                            <div className="left medium-text notification-message ">
                              <div className="small-v-padding">
                                {val.message.length > 120
                                  ? `${val.message.substring(0, 120)}...`
                                  : `${val.message}`}
                              </div>
                              <a className="text-info medium-v-padding" href={val.url}>
                                Click here to read
                              </a>
                              <br />
                            </div>

                            <div className="right small-text text-light-grie notification-time hide-on-medium hide-on-small">
                              {new Date(val.createdAt).toDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="divider" />

                        <div className="divider light-grey" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div />
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.string,
  message: PropTypes.string,
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  markAllAsSeen: PropTypes.func,
  notifications: PropTypes.array,
  deleteNotification: PropTypes.func,
  getNotification: PropTypes.func.isRequired,
  getUnseenNotification: PropTypes.func.isRequired,
  updateUnseenNotification: PropTypes.func.isRequired
};
const mapStateToProps = ({
  notification: {
    notifications,
    unseenNotifications,
    getNotification: { errors, message, loading },
    showNotificationModal
  }
}) => ({
  notifications,
  unseenNotifications,
  showNotificationModal,
  errors,
  message,
  loading
});

export default connect(
  mapStateToProps,
  {
    getNotification,
    getUnseenNotification,
    updateUnseenNotification,
    deleteNotification,
    markAllAsSeen
  }
)(Modal);
