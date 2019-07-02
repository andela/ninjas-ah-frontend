import passwordReducer from '../../reducers/user/passwordReducer';
import initialState from '../../store/initialState';
import { passwordAction } from '../../actions-types';
import {
  sendEmail,
  fakeEmail,
  matchedResetPassword,
  mismatchedResetPassword
} from '../../__mocks__/user';

describe('User reducer', () => {
  test('INITIALIZE_EMAIL', () => {
    const reducer = passwordReducer(initialState, {
      type: passwordAction.FORGOT_PASSWORD_INITIALIZED,
      payload: { ...sendEmail }
    });
    expect(reducer).toHaveProperty('email');
  });

  test('EMAIL_SENT_SUCCESSFULLY', () => {
    const reducer = passwordReducer(initialState, {
      type: passwordAction.FORGOT_PASSWORD_SUCCESS,
      payload: { ...sendEmail }
    });
    expect(reducer).toHaveProperty('email');
  });

  test('ERROR', () => {
    const reducer = passwordReducer(initialState, {
      type: passwordAction.FORGOT_PASSWORD_ERROR,
      payload: { ...fakeEmail }
    });
    expect(reducer).toHaveProperty('email');
  });

  test('INITIALIZE_PASSWORD', () => {
    const reducer = passwordReducer(initialState, {
      type: passwordAction.RESET_PASSWORD_INITIALIZED,
      payload: { ...matchedResetPassword }
    });
    expect(reducer).toHaveProperty('password');
    expect(reducer).toHaveProperty('confirmPassword');
  });

  test('UPDATE_SUCCESSFULLY_PASSWORD', () => {
    const reducer = passwordReducer(initialState, {
      type: passwordAction.RESET_PASSWORD_SUCCESS,
      payload: { ...matchedResetPassword }
    });
    expect(reducer).toHaveProperty('password');
    expect(reducer).toHaveProperty('confirmPassword');
  });

  test('ERROR', () => {
    const reducer = passwordReducer(initialState, {
      type: passwordAction.RESET_PASSWORD_ERROR,
      payload: { ...mismatchedResetPassword }
    });
    expect(reducer).toHaveProperty('password');
    expect(reducer).toHaveProperty('confirmPassword');
  });
});
