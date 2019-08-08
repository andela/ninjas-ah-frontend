import useReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('Login reducers', () => {
  test('LOGIN_USER_START', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.LOGIN_USER_START,
      payload: { loading: true }
    });

    expect(reducer.login).toHaveProperty('loading');
    expect(reducer.login.loading).toBeTruthy();
  });

  test('LOGIN SUCCESS', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.LOGIN_USER_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toHaveProperty('firstName');
    expect(reducer.profile).toHaveProperty('lastName');
    expect(reducer.profile).toHaveProperty('username');
    expect(reducer.profile).toHaveProperty('email');
  });

  test('LOGIN FAILURE', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.LOGIN_USER_FAILURE,
      payload: { errors: { user: 'user do not exist' } }
    });

    expect(reducer.login.errors).toHaveProperty('user');
    expect(reducer.login.errors.user).toEqual('user do not exist');
  });

  test('LOGIN END', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.LOGIN_USER_END,
      payload: { loading: false }
    });

    expect(reducer.signup).toHaveProperty('loading');
    expect(reducer.signup.loading).toBeFalsy();
  });
});
