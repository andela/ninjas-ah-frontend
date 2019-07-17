import notification from '../../../__mocks__/notification';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

const notificationTest = { id: 1, message: 'test', status: 'unseen' };
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
  test('REMOVE_NOTIFICATION', () => {
    const initialState = {
      notifications: [
        {
          id: 1,
          message: 'this is my message',
          status: 'seen'
        },
        {
          id: 2,
          message: 'this is my message',
          status: 'unseen'
        }
      ]
    };
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.REMOVE_NOTIFICATION,
      payload: initialState.notifications.filter(element => element.id !== 1)
    });
    expect(reducer).toBeDefined();
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
