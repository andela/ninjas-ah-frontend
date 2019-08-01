import { getUsers } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Get users', () => {
  test('should return all users', async () => {
    const result = getUsers(0, 15)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users?offset=0&limit=20');
  });

  test('should return all users', async () => {
    const result = getUsers()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users?offset=0&limit=15');
  });
});
