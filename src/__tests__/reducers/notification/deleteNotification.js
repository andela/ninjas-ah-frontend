import notification from '../../../__mocks__/notification';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducers', () => {
  test('DELETE_NOTIFICATION_START', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.DELETE_NOTIFICATION_START,
      payload: { loading: true }
    });
    expect(reducer.deleteNotification).toHaveProperty('loading');
    expect(reducer.deleteNotification.loading).toBeTruthy();
  });

  test('DELETE_NOTIFICATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.DELETE_NOTIFICATION_SUCCESS,
      payload: { ...notification }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('DELETE_NOTIFICATION_FAILURE', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.DELETE_NOTIFICATION_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.deleteNotification).toHaveProperty('errors');
  });

  test('DELETE_NOTIFICATION_END', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.DELETE_NOTIFICATION_END,
      payload: { loading: false }
    });
    expect(reducer.deleteNotification).toHaveProperty('loading');
    expect(reducer.deleteNotification.loading).toBeFalsy();
  });
});
