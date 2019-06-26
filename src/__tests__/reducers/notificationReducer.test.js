import notification from '../../__mocks__/notification';
import reducers from '../../reducers';
import initialState from '../../store/initialStates/notification';
import { notificationActionTypes } from '../../actions-types';

describe('Notification reducer', () => {
  test('CREATE_NOTIFICATION_CONFIGURATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_SUCCESS,
      payload: { ...notification }
    });

    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('GET_NOTIFICATION_CONFIGURATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_SUCCESS,
      payload: { ...notification }
    });

    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('UPDATE_NOTIFICATION_CONFIGURATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_SUCCESS,
      payload: { ...notification }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });

  test('TOGGLE_NOTIFICATION_TYPE', () => {
    Object.keys(notification.config).map((key) => {
      const reducer = reducers.notification(initialState, {
        type: notificationActionTypes.TOGGLE_NOTIFICATION_CONFIGURATION_TYPE,
        payload: key
      });
      expect(reducer).toHaveProperty('config');
      expect.objectContaining('config');
    });
  });

  test('ADD_OPTION', () => {
    Object.keys(notification.config).map((type, option) => {
      const reducer = reducers.notification(initialState, {
        type: notificationActionTypes.ADD_OPTION,
        payload: { option, type }
      });
      expect(reducer).toHaveProperty('config');
      expect.objectContaining('config');
    });
  });

  test('REMOVE_OPTION', () => {
    initialState.config.inApp.articles.on = ['publish', 'comment'];
    Object.keys(notification.config).map((type, option) => {
      const reducer = reducers.notification(initialState, {
        type: notificationActionTypes.REMOVE_OPTION,
        payload: { option: 'publish', type }
      });
      expect(reducer).toHaveProperty('config');
      expect.objectContaining('config');
    });
  });
  test('Default', () => {
    const reducer = reducers.notification(initialState, {
      type: null,
      payload: null
    });

    expect(reducer).toHaveProperty('config');
    expect.objectContaining([]);
  });
});
