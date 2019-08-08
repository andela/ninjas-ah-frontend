import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_START:
      return {
        ...state,
        updateNotificationConfiguration: {
          ...state.updateNotificationConfiguration,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_END:
      return {
        ...state,
        updateNotificationConfiguration: {
          ...state.updateNotificationConfiguration,
          loading: false
        }
      };
    case notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_SUCCESS:
      return {
        ...state,
        config: {
          inApp: {
            alias: 'Authors Haven',
            ...payload.configuration.inApp
          },
          email: {
            alias: 'Email',
            ...payload.configuration.email
          }
        },
        updateNotificationConfiguration: {
          loading: false,
          message: 'Updated successfully',
          errors: {}
        }
      };

    default:
      return null;
  }
};
