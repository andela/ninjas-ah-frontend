import mockAxios from 'axios';
import { shallow } from '../../../config/enzymeConfig';
import { login } from '../../actions/user';
import { rejectedRequest } from '../../__mocks__/axios';
import store from '../../__mocks__/store';

describe('Login component', () => {
  it('should dispatch Action', async () => {
    const request = {
      data: {},
      status: 200
    };
    const user = {
      firstName: 'Prince',
      lastName: 'sengayire',
      username: 'daprince',
      email: 'prince@email.com',
      password: 'Daprince!'
    };
    mockAxios.post.mockResolvedValueOnce({ request, data: { user } });
    const result = await store.dispatch(login());
    expect(result).toHaveProperty('user');
  });

  it('return error when fail', async () => {
    mockAxios.post.mockRejectedValueOnce(rejectedRequest);
    await store.dispatch(login());
  });

  it('return error when fail', async () => {
    mockAxios.post.mockRejectedValueOnce({
      error: { message: 'Network error' }
    });
    await store.dispatch(login());
  });
});
