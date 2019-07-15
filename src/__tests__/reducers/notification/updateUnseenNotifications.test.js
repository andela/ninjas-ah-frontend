import { notifications } from '../../../__mocks__/notificationUpdate';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducers', () => {
  test('UPDATE_UNSEEN_NOTIFICATION_START', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_START,
      payload: { loading: true }
    });
    expect(reducer.updateUnseenNotification).toHaveProperty('loading');
  });

  test('UPDATE_UNSEEN_NOTIFICATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_SUCCESS,
      payload: { ...notifications }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('UPDATE_UNSEEN_NOTIFICATION_FAILURE', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.updateUnseenNotification).toHaveProperty('errors');
  });

  test('UPDATE_UNSEEN_NOTIFICATION_END', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_END,
      payload: { loading: false }
    });
    expect(reducer.updateUnseenNotification).toHaveProperty('loading');
    expect(reducer.updateUnseenNotification.loading).toBeFalsy();
  });
});
