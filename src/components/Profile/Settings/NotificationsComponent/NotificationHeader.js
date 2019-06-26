import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  toggleNotificationType,
  getNotificationConfiguration
} from '../../../../actions/notificationActions';

class NotificationHeader extends Component {
  componentDidMount() {
    const { getNotificationConfiguration } = this.props;
    getNotificationConfiguration();
  }

  render() {
    const { configuration, toggleNotificationType } = this.props;
    return (
      <div>
        <h3>Notifications</h3>
        <p>Select from where you would like receive your notifications</p>
        {Object.keys(configuration).map((key, index) => (
          <div key={index}>
            <input
              type="checkbox"
              key={index}
              className="medium-margin"
              data-test={key}
              checked={configuration[key].articles.show}
              onChange={() => toggleNotificationType(key)}
            />
            {configuration[key].alias}
            {Object.keys(configuration).length === index + 1 ? (
              <div className="divider b-bottom-light-grey" />
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

NotificationHeader.propTypes = {
  configuration: PropTypes.object.isRequired,
  toggleNotificationType: PropTypes.func.isRequired,
  getNotificationConfiguration: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleNotificationType: (type) => {
    dispatch(toggleNotificationType(type));
  },
  getNotificationConfiguration: () => {
    dispatch(getNotificationConfiguration());
  }
});
const mapStateToProps = ({ notification: { config } }) => ({ configuration: config });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationHeader);
