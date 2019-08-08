import { searchUser } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Search user', () => {
  test('should return user information', async () => {
    const result = searchUser('josmi')(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/username/josmi');
  });

  test('should return user information', async () => {
    const result = searchUser()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/username/');
  });
});
