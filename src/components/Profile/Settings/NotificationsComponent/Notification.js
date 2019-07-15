import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Alert, Button } from '../../../common';
import {
  createNotificationConfiguration,
  getNotificationConfiguration,
  updateNotificationConfiguration
} from '../../../../actions/notificationActions';
import NotificationHeader from './NotificationHeader';
import NotificationOptions from './NotificationOptions';
import Layout from '../../../Layout';

export class Notification extends Component {
  componentWillMount() {
    if (localStorage.token) {
      const { configuration, createNotificationConfiguration } = this.props;
      const newNotify = { ...configuration };
      Object.keys(newNotify).forEach(key => delete newNotify[key].alias);
      createNotificationConfiguration(configuration);
    } else window.location.replace('/login');
  }

  componentDidMount() {
    const { getNotificationConfiguration, configuration } = this.props;
    const newNotify = { ...configuration };
    Object.keys(newNotify).forEach(key => delete newNotify[key].alias);
    getNotificationConfiguration();
  }

  saveNotificationConfiguration = () => {
    const { configuration, updateNotificationConfiguration } = this.props;
    const newNotify = { ...configuration };
    Object.keys(newNotify).forEach(key => delete newNotify[key].alias);

    updateNotificationConfiguration(newNotify);
  };

  render() {
    const { configuration, errors, message, loading } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="container">
            <div className="small-screen-4 medium-screen-4 large-screen-4">
              {(message || errors.token || errors.authentication || errors.message) && (
                <Alert
                  alertType={(message && 'success') || 'danger'}
                  message={message || errors.token || errors.authentication || errors.message}
                />
              )}
              <div className="border b-light-grey radius-1 shadow-2" id="notifications">
                <div className="xlarge-padding">
                  <NotificationHeader notification={configuration} />
                  <NotificationOptions
                    notification={configuration}
                    onClick={this.handleChecked}
                    configuration={configuration}
                  />
                  <Button
                    children="Save"
                    id="save-notification-configuration"
                    className="button yellow text-black bold radius-4 medium-margin center"
                    onClick={this.saveNotificationConfiguration}
                    loading={loading}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
Notification.propTypes = {
  configuration: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  message: PropTypes.string,
  createNotificationConfiguration: PropTypes.func.isRequired,
  updateNotificationConfiguration: PropTypes.func.isRequired,
  getNotificationConfiguration: PropTypes.func.isRequired
};
const mapStateToProps = ({
  notification: {
    config,
    updateNotificationConfiguration: { message, loading },
    getNotificationConfiguration: { errors }
  }
}) => ({
  configuration: config,
  errors,
  message,
  loading
});
const mapDispatchToProps = dispatch => ({
  createNotificationConfiguration: config => dispatch(createNotificationConfiguration(config)),
  updateNotificationConfiguration: config => dispatch(updateNotificationConfiguration(config)),
  getNotificationConfiguration: () => {
    dispatch(getNotificationConfiguration());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
