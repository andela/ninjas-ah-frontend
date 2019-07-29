import notification from '../../../__mocks__/notification';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducers', () => {
  test('MARK_ALL_NOTIFICATIONS_AS_SEEN_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.MARK_ALL_NOTIFICATIONS_AS_SEEN_SUCCESS,
      payload: { ...notification }
    });
    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
  test('MARK_ALL_NOTIFICATIONS_AS_SEEN_FAILURE', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.MARK_ALL_NOTIFICATIONS_AS_SEEN_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.getNotification).toHaveProperty('errors');
  });
});
