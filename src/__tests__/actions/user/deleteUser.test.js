import { deleteUser } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Delete user', () => {
  test('should delete user', async () => {
    const result = deleteUser(1)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/1');
  });

  test('should delete user', async () => {
    const result = deleteUser()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/0');
  });
});
