import { editProfile } from '../../../actions/user';
import user from '../../../__mocks__/user';

const dispatch = jest.fn(action => action);

describe('Edit profile', () => {
  test('should update a profile of a given user', async () => {
    const result = editProfile(user)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(user);
  });

  test('should update a profile of a given user', async () => {
    const result = editProfile(user, 1)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(user);
  });
});
