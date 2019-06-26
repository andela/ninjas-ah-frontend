export default (Object.user = {
  firstName: 'John',
  lastName: 'Smith',
  username: 'josmi',
  email: 'josmi@email.com',
  password: 'Abcd1234!'
});

export const userToRegister = {
  ...Object.user,
  confirmPassword: 'Abcd1234!'
};

export const mismatchedUserPassword = {
  ...Object.user,
  password: '12345678',
  confirmPassword: '1234abcd'
};

export const wrongUserPassword = {
  ...Object.user,
  password: 'Abcd1234'
};
