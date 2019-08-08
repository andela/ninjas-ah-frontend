import { validateUser } from '../../../helpers/validation';
import { userToRegister } from '../../../__mocks__/user';

test('Validate user with correct inputs', () => {
  const errors = validateUser(userToRegister, 'newUser');
  expect(Object.keys(errors).length).toBe(0);
});

test('Validate user with incorrect inputs', () => {
  const errors = validateUser({}, 'newUser');
  expect(Object.keys(errors).length).toBeGreaterThan(0);
});
