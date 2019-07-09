import { getUser } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Get user', () => {
  test('returns user information', async () => {
    const result = getUser.byId(1)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/1');
  });

  test('returns user information', async () => {
    const result = getUser.byId()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/users/0');
  });
});
