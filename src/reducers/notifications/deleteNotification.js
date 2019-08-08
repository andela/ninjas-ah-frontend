import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.DELETE_NOTIFICATION_START:
      return {
        ...state,
        deleteNotification: {
          ...state.deleteNotification,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case notificationActionTypes.DELETE_NOTIFICATION_END:
      return {
        ...state,
        deleteNotification: {
          ...state.deleteNotification,
          loading: false
        }
      };
    case notificationActionTypes.DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        ...payload,
        deleteNotification: {
          loading: false,
          message: 'Updated successfully',
          errors: {}
        }
      };
    case notificationActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(element => element.id !== payload)
      };
    default:
      return null;
  }
};
