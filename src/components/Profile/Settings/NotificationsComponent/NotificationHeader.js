import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleNotificationType } from '../../../../actions/notificationActions';

const NotificationHeader = ({ notification, toggleNotificationType }) => (
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

NotificationHeader.propTypes = {
  notification: PropTypes.object.isRequired,
  toggleNotificationType: PropTypes.func.isRequired
};

const mapStateToProps = ({ notificationReducer: { config } }) => ({ notification: config });

const mapDispatchToProps = dispatch => ({
  toggleNotificationType: (type) => {
    dispatch(toggleNotificationType(type));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationHeader);
