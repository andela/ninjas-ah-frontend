import mockAxios from 'axios';
import { forgotPassword, resetPassword } from '../../../actions/user/passwordActions';
import { rejectedRequest } from '../../../__mocks__/axios';
import store from '../../../__mocks__/store';

describe('Password', () => {
  test('returns user information', async () => {
    mockAxios.post.mockResolvedValueOnce({ data: { message: 'email sent' } });
    const result = await store.dispatch(forgotPassword({ email: 'email' }));
    expect(result).toHaveProperty('message');
  });

  test('returns an error', async () => {
    mockAxios.post.mockRejectedValueOnce({ ...rejectedRequest });
    const result = await store.dispatch(forgotPassword());
    expect(result).toHaveProperty('errors');
  });

  test('Update the password', async () => {
    mockAxios.patch.mockResolvedValueOnce({ data: { message: 'password updated' } });
    const result = await store.dispatch(resetPassword({ passwordOne: 'Brazzaville10!', passwordTwo: 'Brazzaville10!' }));
    expect(result).toHaveProperty('message');
  });

  test('returns an error', async () => {
    mockAxios.patch.mockRejectedValueOnce({ ...rejectedRequest });
    const result = await store.dispatch(resetPassword());
    expect(result).toHaveProperty('errors');
  });
});
