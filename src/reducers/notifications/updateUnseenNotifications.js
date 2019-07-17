import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_START:
      return {
        ...state,
        updateUnseenNotification: {
          ...state.updateUnseenNotification,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_END:
      return {
        ...state,
        updateUnseenNotification: {
          ...state.updateUnseenNotification,
          loading: false
        }
      };
    case notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_SUCCESS:
      return {
        ...state,
        unseenNotifications: {
          id: payload.notifications.id,
          status: 'seen'
        },
        updateUnseenNotification: {
          loading: false,
          message: 'Updated successfully',
          errors: {}
        }
      };

    default:
      return null;
  }
};
