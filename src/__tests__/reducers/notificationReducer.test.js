import notification from '../../__mocks__/notification';
import reducers from '../../reducers';
import initialState from '../../store/initialStates/notification';
import { notificationActionTypes } from '../../action-types';

describe('Notification reducer', () => {
  test('CREATE_ONE', () => {
    const reducer = reducers.notificationReducer(initialState, {
      type: notificationActionTypes.CREATE_ONE,
      payload: { ...notification }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });

  test('CATCH_ERROR', () => {
    const newNotify = { ...notification.config };
    const reducer = reducers.notificationReducer(initialState, {
      type: notificationActionTypes.CATCH_ERROR,
      payload: { ...newNotify }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('TOGGLE_NOTIFICATION_TYPE', () => {
    Object.keys(notification.config).map((key) => {
      const reducer = reducers.notificationReducer(initialState, {
        type: notificationActionTypes.TOGGLE_NOTIFICATION_TYPE,
        payload: key
      });
      expect(reducer).toHaveProperty('config');
      expect.objectContaining('config');
    });
  });

  test('ADD_OPTION', () => {
    Object.keys(notification.config).map((type, option) => {
      const reducer = reducers.notificationReducer(initialState, {
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
      const reducer = reducers.notificationReducer(initialState, {
        type: notificationActionTypes.REMOVE_OPTION,
        payload: { option: 'publish', type }
      });
      expect(reducer).toHaveProperty('config');
      expect.objectContaining('config');
    });
  });
  test('Default', () => {
    const reducer = reducers.notificationReducer(initialState, {
      type: null,
      payload: null
    });

    expect(reducer).toHaveProperty('config');
    expect.objectContaining([]);
  });
});
