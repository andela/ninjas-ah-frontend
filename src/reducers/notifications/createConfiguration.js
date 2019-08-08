import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_SUCCESS:
      return {
        ...state,
        config: payload,
        createNotificationConfiguration: {}
      };

    default:
      return null;
  }
};
