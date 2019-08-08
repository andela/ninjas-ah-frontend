import { getUser } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Get user', () => {
  test('should return user information', async () => {
    const result = getUser(1)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/1');
  });

  test('should return user information', async () => {
    const result = getUser()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/0');
  });
});
