import notification from '../../../__mocks__/notification';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducers', () => {
  test('GET_NOTIFICATION_CONFIGURATION_START', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_START,
      payload: { loading: true }
    });
    expect(reducer.getNotificationConfiguration).toHaveProperty('loading');
    expect(reducer.getNotificationConfiguration.loading).toBeTruthy();
  });

  test('GET_NOTIFICATION_CONFIGURATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_SUCCESS,
      payload: { ...notification }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('GET_NOTIFICATION_CONFIGURATION_FAILURE', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.getNotificationConfiguration).toHaveProperty('errors');
  });

  test('GET_NOTIFICATION_CONFIGURATION_END', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_END,
      payload: { loading: false }
    });
    expect(reducer.getNotificationConfiguration).toHaveProperty('loading');
    expect(reducer.getNotificationConfiguration.loading).toBeFalsy();
  });
});
