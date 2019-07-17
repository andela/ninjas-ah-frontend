import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.GET_UNSEEN_NOTIFICATION_START:
      return {
        ...state,
        getUnseenNotification: {
          ...state.getUnseenNotification,
          message: '',
          loading: true,
          errors: ''
        }
      };
    case notificationActionTypes.GET_UNSEEN_NOTIFICATION_END:
      return {
        ...state,
        getUnseenNotification: { ...state.getUnseenNotification, loading: false }
      };
    case notificationActionTypes.GET_UNSEEN_NOTIFICATION_SUCCESS:
      return {
        ...state,
        unseenNotifications: payload.notifications
      };
    case notificationActionTypes.GET_UNSEEN_NOTIFICATION_FAILURE:
      return {
        ...state,
        getUnseenNotification: { loading: false, message: '', errors: '' }
      };
    default:
      return null;
  }
};
