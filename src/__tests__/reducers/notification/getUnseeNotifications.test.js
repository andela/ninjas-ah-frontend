import notification from '../../../__mocks__/notification';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducers', () => {
  test('GET_UNSEEN_NOTIFICATION_START', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_UNSEEN_NOTIFICATION_START,
      payload: { loading: true }
    });
    expect(reducer.getUnseenNotification).toHaveProperty('loading');
    expect(reducer.getUnseenNotification.loading).toBeTruthy();
  });

  test('GET_UNSEEN_NOTIFICATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_UNSEEN_NOTIFICATION_SUCCESS,
      payload: {}
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('GET_UNSEEN_NOTIFICATION_FAILURE', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_UNSEEN_NOTIFICATION_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.getUnseenNotification).toHaveProperty('errors');
  });

  test('GET_UNSEEN_NOTIFICATION_END', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_UNSEEN_NOTIFICATION_END,
      payload: { loading: false }
    });
    expect(reducer.getUnseenNotification).toHaveProperty('loading');
    expect(reducer.getUnseenNotification.loading).toBeFalsy();
  });
});
