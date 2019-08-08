import notification from '../../../__mocks__/notification';
import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/notification';
import { notificationActionTypes } from '../../../actions-types';

describe('Notification reducer', () => {
  test('CREATE_NOTIFICATION_CONFIGURATION_SUCCESS', () => {
    const reducer = reducers.notification(initialState, {
      type: notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_SUCCESS,
      payload: { ...notification }
    });

    expect(reducer).toHaveProperty('config');
    expect.objectContaining('config');
  });
});
