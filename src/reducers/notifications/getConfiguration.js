import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_START:
      return {
        ...state,
        getNotificationConfiguration: {
          ...state.getNotificationConfiguration,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_END:
      return {
        ...state,
        getNotificationConfiguration: { ...state.getNotificationConfiguration, loading: false }
      };
    case notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_SUCCESS:
      return {
        ...state,
        config: {
          inApp: {
            alias: 'Authors Haven',
            articles: {
              show: payload.config === null ? false : payload.config.inApp.articles.show,
              on: payload.config === null ? [] : payload.config.inApp.articles.on
            }
          },
          email: {
            alias: 'Email',
            articles: {
              show: payload.config === null ? false : payload.config.email.articles.show,
              on: payload.config === null ? [] : payload.config.email.articles.on
            }
          }
        }
      };
    case notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_FAILURE:
      return {
        ...state,
        getNotificationConfiguration: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};
