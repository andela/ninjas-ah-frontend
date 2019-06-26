import mockAxios from 'axios';
import { createOne, addOption, toggleNotificationType } from '../../../actions/notificationActions';
import store from '../../../__mocks__/store';
import notification from '../../../__mocks__/notification';
import { resolvedRequest, rejectedRequest } from '../../../__mocks__/axios';
import * as types from '../../../action-types';

describe('Create notification', () => {
  test('return new notification configurations ', async () => {
    mockAxios.post.mockResolvedValueOnce({ ...resolvedRequest, data: notification });
    await store.dispatch(createOne());
  });
  test('returns an error', async () => {
    mockAxios.post.mockRejectedValueOnce({ ...rejectedRequest });
    await store.dispatch(createOne());
  });

  it('Should add a new option', () => {
    const option = true;
    const type = 'email';
    const add = addOption(option, type);
    expect(add).toEqual({
      type: types.notificationActionTypes.ADD_OPTION,
      payload: { option: true, type: 'email' }
    });
  });

  it('Should toggle true or false on email and inApp option', () => {
    const type = 'email';
    const toggle = toggleNotificationType(type);
    expect(toggle).toEqual({
      type: types.notificationActionTypes.TOGGLE_NOTIFICATION_TYPE,
      payload: 'email'
    });
  });
});
