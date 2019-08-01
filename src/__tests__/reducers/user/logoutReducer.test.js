import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('LOGOUT_USER_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.LOGOUT_USER_START,
      payload: { loading: true }
    });

    expect(reducer.logout).toHaveProperty('loading');
    expect(reducer.logout.loading).toBeTruthy();
  });

  test('LOGOUT_USER_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.LOGOUT_USER_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toEqual({});
    expect(reducer.isAuth).toBeFalsy();
  });

  test('LOGOUT_USER_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.LOGOUT_USER_FAILURE,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.logout.errors).toHaveProperty('user');
    expect(reducer.logout.errors.user).toEqual('user does not exist');
  });

  test('LOGOUT_USER_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.LOGOUT_USER_END,
      payload: { loading: false }
    });

    expect(reducer.logout).toHaveProperty('loading');
    expect(reducer.logout.loading).toBeFalsy();
  });
});
