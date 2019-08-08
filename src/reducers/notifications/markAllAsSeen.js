import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.MARK_ALL_NOTIFICATIONS_AS_SEEN_SUCCESS:
      return {
        ...state,
        notifications: payload.notifications
      };
    case notificationActionTypes.MARK_ALL_NOTIFICATIONS_AS_SEEN_FAILURE:
      return {
        ...state,
        getNotification: { loading: false, message: '', errors: '' }
      };
    default:
      return null;
  }
};
