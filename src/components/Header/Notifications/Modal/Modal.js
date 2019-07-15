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
  deleteNotification
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

  deleteNotificat = (val) => {
    const { deleteNotification } = this.props;
    deleteNotification(val);
  };

  render() {
    const { notifications, showModal, closeModal } = this.props;
    return (
      <div className="container">
        <div className="card">
          <div id="modal" className={showModal ? '' : 'hide'}>
            <form>
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <div className="text-black center-align">
                  <h4>Notification</h4>
                </div>
                <br />
                <div />
                {(notifications || []).map((val, key) => (
                  <div key={key} className={val.status === 'unseen' ? 'row light-red' : 'row'}>
                    <div key={key}>
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
                              className="left small-padding text-danger"
                              onClick={() => this.deleteNotificat(val)}
                            />
                          </div>
                          <div className="left medium-text notification-message ">
                            <a className="text-info small-v-margin" href={val.url}>
                              Click here to read
                            </a>
                            <br />

                            {val.message.length > 120
                              ? `${val.message.substring(0, 120)}...`
                              : `${val.message}`}
                            <br />
                          </div>

                          <div className="right small-text text-light-grie notification-time hide-on-medium hide-on-small">
                            {new Date(val.createdAt).toDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="divider" />
                    </div>

                    <div className="divider light-grey" />
                  </div>
                ))}
              </div>
              <br />
            </form>
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
  notifications: PropTypes.array,
  deleteNotificat: PropTypes.func,
  deleteNotification: PropTypes.func,
  unseenNotifications: PropTypes.array,
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
  { getNotification, getUnseenNotification, updateUnseenNotification, deleteNotification }
)(Modal);
