import notification from '../../../__mocks__/notification';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducers', () => {
  test('GET_NOTIFICATION_START', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_START,
      payload: { loading: true }
    });
    expect(reducer.getNotification).toHaveProperty('loading');
    expect(reducer.getNotification.loading).toBeTruthy();
  });

  test('GET_NOTIFICATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_SUCCESS,
      payload: { ...notification }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('GET_NOTIFICATION_FAILURE', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.getNotification).toHaveProperty('errors');
  });

  test('GET_NOTIFICATION_END', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_END,
      payload: { loading: false }
    });
    expect(reducer.getNotification).toHaveProperty('loading');
    expect(reducer.getNotification.loading).toBeFalsy();
  });
});
