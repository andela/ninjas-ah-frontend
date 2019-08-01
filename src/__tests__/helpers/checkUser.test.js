import checkUser from '../../helpers/checkUser';

test('checkUser', () => {
  expect(checkUser()).toBeCalled;
});

test('checkUser', () => {
  localStorage.user = 'user';
  localStorage.token = 'token';
  expect(checkUser()).toBeCalled;
});
