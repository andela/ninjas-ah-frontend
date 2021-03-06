import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('SIGNUP_USER_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_START,
      payload: { loading: true }
    });

    expect(reducer.signup).toHaveProperty('loading');
    expect(reducer.signup.loading).toBeTruthy();
  });

  test('SIGNUP_USER_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toHaveProperty('firstName');
    expect(reducer.profile).toHaveProperty('lastName');
    expect(reducer.profile).toHaveProperty('username');
    expect(reducer.profile).toHaveProperty('email');
  });

  test('SIGNUP_USER_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_FAILURE,
      payload: { errors: { user: 'user already exist' } }
    });

    expect(reducer.signup.errors).toHaveProperty('user');
    expect(reducer.signup.errors.user).toEqual('user already exist');
  });

  test('SIGNUP_USER_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_END,
      payload: { loading: false }
    });

    expect(reducer.signup).toHaveProperty('loading');
    expect(reducer.signup.loading).toBeFalsy();
  });
});
