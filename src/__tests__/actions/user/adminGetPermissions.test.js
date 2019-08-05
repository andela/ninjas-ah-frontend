import { adminGetPermissions } from '../../../actions/user';

const dispatch = jest.fn(action => action);

describe('Get permissions', () => {
  test('should return permissions of a normal user', async () => {
    const result = adminGetPermissions('normal')(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/permissions/normal');
  });

  test('should return all permissions', async () => {
    const result = adminGetPermissions()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.url).toEqual('/permissions/');
  });
});
