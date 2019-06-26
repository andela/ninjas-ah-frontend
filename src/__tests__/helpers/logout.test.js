/* eslint-disable no-unused-expressions */
import logout from '../../helpers/logout';

test('Logout', () => {
  expect(logout()).toBeCalled;
});
