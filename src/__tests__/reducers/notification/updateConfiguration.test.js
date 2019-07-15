import notificationUpdate from '../../../__mocks__/notificationUpdate';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducers', () => {
  test('UPDATE_NOTIFICATION_CONFIGURATION_START', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_START,
      payload: { loading: true }
    });
    expect(reducer.updateNotificationConfiguration).toHaveProperty('loading');
    expect(reducer.updateNotificationConfiguration.loading).toBeTruthy();
  });

  test('UPDATE_NOTIFICATION_CONFIGURATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_SUCCESS,
      payload: { ...notificationUpdate }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('UPDATE_NOTIFICATION_CONFIGURATION_FAILURE', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.updateNotificationConfiguration).toHaveProperty('errors');
  });

  test('UPDATE_NOTIFICATION_CONFIGURATION_END', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_END,
      payload: { loading: false }
    });
    expect(reducer.updateNotificationConfiguration).toHaveProperty('loading');
    expect(reducer.updateNotificationConfiguration.loading).toBeFalsy();
  });
});
