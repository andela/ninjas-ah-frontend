import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.GET_NOTIFICATION_START:
      return {
        ...state,
        getNotification: {
          ...state.getNotification,
          message: '',
          loading: true,
          errors: ''
        }
      };
    case notificationActionTypes.GET_NOTIFICATION_END:
      return {
        ...state,
        getNotification: { ...state.getNotification, loading: false }
      };
    case notificationActionTypes.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: payload.notifications
      };
    case notificationActionTypes.GET_NOTIFICATION_FAILURE:
      return {
        ...state,
        getNotification: { loading: false, message: '', errors: '' }
      };
    default:
      return null;
  }
};
