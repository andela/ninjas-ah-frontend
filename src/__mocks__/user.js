export default (Object.user = {
  firstName: 'John',
  lastName: 'Smith',
  username: 'josmi',
  email: 'josmi@email.com',
  image: 'image.jpg'
});

export const userToRegister = {
  ...Object.user,
  password: 'Abcd1234!',
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

export const resetPassword = {
  password: '12345678',
  confirmPassword: '12345678'
};

export const mismatchedResetPassword = {
  password: '12345678',
  confirmPassword: '1234abcd'
};

export const matchedResetPassword = {
  passwordOne: 'Brazzaville10!',
  passwordTwo: 'Brazzaville10!'
};

export const sendEmail = { email: 'noreplay@gmail.com' };
export const fakeEmail = { email: 'fsdfsdfsdfdsf--gmail.com' };
