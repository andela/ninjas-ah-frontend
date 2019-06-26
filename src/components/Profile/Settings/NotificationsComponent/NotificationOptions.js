import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { notificationActions } from '../../../../actions';

const onChange = ({ value, checked }, key, onAddOption, onRemoveOption) => {
  if (checked) onAddOption(value, key);
  else onRemoveOption(value, key);
};

const NotificationOption = ({ notification, onAddOption, onRemoveOption }) => (
  <div>
    {Object.keys(notification).map((key, index) => (!notification[key].articles.show ? (
      ''
    ) : (
        <div key={key}>
          <h3>{notification[key].alias} preferences</h3>
          <p>Which notification would you need to get via {notification[key].alias}</p>
          <div>
            <input
              type="checkbox"
              className="medium-margin"
              data-test={key}
              value="publish"
              onChange={e => onChange(e.target, key, onAddOption, onRemoveOption)}
            />
            New articles from my favorite Authors
            <div className="divider" />
            <input
              type="checkbox"
              className="medium-margin"
              data-test={index}
              value="comment"
              onChange={e => onChange(e.target, key, onAddOption, onRemoveOption)}
            />
            New comments from my favorite articles
          </div>

          {Object.keys(notification).length !== index ? (
            <div className="divider b-bottom-light-grey" />
          ) : null}
        </div>
    )))}
  </div>
);
NotificationOption.propTypes = {
  notification: PropTypes.object.isRequired,
  onAddOption: PropTypes.func,
  onRemoveOption: PropTypes.func
};

const mapStateToProps = ({ notificationReducer: { config } }) => ({ notification: config });

const mapDispatchToProps = dispatch => ({
  onAddOption: (option, type) => dispatch(notificationActions.addOption(option, type)),
  onRemoveOption: (option, type) => dispatch(notificationActions.removeOption(option, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationOption);
