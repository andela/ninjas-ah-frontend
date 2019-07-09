import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleNotificationType, getConfiguration } from '../../../../actions/notificationActions';

class NotificationHeader extends Component {
  componentDidMount() {
    const { getConfiguration } = this.props;
    getConfiguration();
  }

  render() {
    const { notification, toggleNotificationType } = this.props;
    return (
      <div>
        <h3>Notifications</h3>
        <p>Select from where you would like receive your notifications</p>
        {Object.keys(notification).map((key, index) => (
          <div key={index}>
            <input
              type="checkbox"
              key={index}
              className="medium-margin"
              data-test={key}
              checked={notification[key].articles.show}
              onChange={() => toggleNotificationType(key)}
            />
            {notification[key].alias}
            {Object.keys(notification).length === index + 1 ? (
              <div className="divider b-bottom-light-grey" />
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

NotificationHeader.propTypes = {
  notification: PropTypes.object.isRequired,
  toggleNotificationType: PropTypes.func.isRequired,
  getConfiguration: PropTypes.func.isRequired
};

const mapStateToProps = ({ notificationReducer: { config } }) => ({ notification: config });

const mapDispatchToProps = dispatch => ({
  toggleNotificationType: (type) => {
    dispatch(toggleNotificationType(type));
  },
  getConfiguration: () => {
    dispatch(getConfiguration());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationHeader);
