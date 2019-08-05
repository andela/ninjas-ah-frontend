import { searchUser } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Search user', () => {
  test('should return user information', async () => {
    const result = searchUser(1)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/1');
  });

  test('should return user information', async () => {
    const result = searchUser()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/0');
  });
});
