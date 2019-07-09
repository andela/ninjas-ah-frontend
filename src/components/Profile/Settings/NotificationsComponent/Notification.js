import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '../../../common';
import Settings from '../Settings';
import { createOne, getConfiguration } from '../../../../actions/notificationActions';
import NotificationHeader from './NotificationHeader';
import NotificationOptions from './NotificationOptions';
import Layout from '../../../Layout';

export class Notification extends Component {
  componentDidMount() {
    const { getConfiguration } = this.props;

    getConfiguration();
  }

  save = () => {
    const { createOne, notification } = this.props;
    const newNotify = { ...notification };
    Object.keys(newNotify).forEach(key => delete newNotify[key].alias);
    createOne(newNotify);
  };

  render() {
    const { notification, errorMessage } = this.props;
    return (
      <Layout>
        <div className="container">
          <div className="divider" />
          <div id="notifications" className="row xxlarge-margin">
            <div className="small-screen-4 medium-screen-1 large-screen-1 hide-on-medium hide-on-small">
              <Settings />
            </div>
            <div className="small-screen-1 medium-screen-2 small-screen-2">
              {errorMessage ? (
                <div className="large-margin large-padding radius-2 text-danger">
                  {errorMessage}
                </div>
              ) : null}
              <div className="large-margin border b-light-grey radius-1">
                <div className="large-margin ">
                  <NotificationHeader notification={notification} />
                  <NotificationOptions notification={notification} onClick={this.handleChecked} />
                  <Button
<<<<<<< HEAD
=======
                    children="Save"
>>>>>>> [feature #165412886]Get notifications
                    id="save"
                    className="button yellow text-black bold radius-4 medium-margin center"
                    onClick={this.save}
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
  notification: PropTypes.object.isRequired,
  createOne: PropTypes.func.isRequired,
  getConfiguration: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};
const mapStateToProps = ({ notificationReducer }) => ({
  notification: notificationReducer.config,
  errorMessage: notificationReducer.errorMessage
});
const mapDispatchToProps = dispatch => ({
  createOne: config => dispatch(createOne(config)),
  getConfiguration: () => {
    dispatch(getConfiguration());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
