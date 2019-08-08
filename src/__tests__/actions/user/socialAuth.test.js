import { socialAuth } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Social media authentication', () => {
  test('returns user information', async () => {
    const result = socialAuth({ id: 1, token: 'access-token' })(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.httpOptions).toHaveProperty('token');
    expect(result.payload.httpOptions.token).toEqual('access-token');
  });

  test('returns user information', async () => {
    const result = socialAuth()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.httpOptions).toHaveProperty('token');
    expect(result.payload.httpOptions.token).toEqual(undefined);
  });
});
