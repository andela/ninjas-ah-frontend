import logout from '../../helpers/logout';

test('Logout', () => {
  expect(logout()).toBeCalled;
});
