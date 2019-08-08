import { adminCreateUser } from '../../../actions/user';
import user from '../../../__mocks__/user';

const dispatch = jest.fn(action => action);

describe('Create user', () => {
  test('should create a user', async () => {
    const result = adminCreateUser(user)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(user);
  });
});
