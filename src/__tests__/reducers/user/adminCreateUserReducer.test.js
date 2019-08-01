import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('ADMIN_CREATE_USER_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_CREATE_USER_START,
      payload: { loading: true }
    });

    expect(reducer.adminCreateUser).toHaveProperty('loading');
    expect(reducer.adminCreateUser.loading).toBeTruthy();
  });

  test('ADMIN_CREATE_USER_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_CREATE_USER_SUCCESS,
      payload: { user, message: 'user created' }
    });

    expect(reducer.adminCreateUser).toHaveProperty('message');
    expect(reducer.adminCreateUser.message).toEqual('user created');
  });

  test('ADMIN_CREATE_USER_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_CREATE_USER_FAILURE,
      payload: { errors: { user: 'user already exist' } }
    });

    expect(reducer.adminCreateUser.errors).toHaveProperty('user');
    expect(reducer.adminCreateUser.errors.user).toEqual('user already exist');
  });

  test('ADMIN_CREATE_USER_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_CREATE_USER_END,
      payload: { loading: false }
    });

    expect(reducer.adminCreateUser).toHaveProperty('loading');
    expect(reducer.adminCreateUser.loading).toBeFalsy();
  });
});
