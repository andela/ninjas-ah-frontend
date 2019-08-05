import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('GET_USER_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.GET_USER_START,
      payload: { loading: true }
    });

    expect(reducer.getUser).toHaveProperty('loading');
    expect(reducer.getUser.loading).toBeTruthy();
  });

  test('GET_USER_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.GET_USER_SUCCESS,
      payload: { user }
    });

    expect(reducer.currentUser).toHaveProperty('firstName');
    expect(reducer.currentUser).toHaveProperty('lastName');
    expect(reducer.currentUser).toHaveProperty('username');
    expect(reducer.currentUser).toHaveProperty('email');
  });

  test('GET_USER_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.GET_USER_FAILURE,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.getUser.errors).toHaveProperty('user');
    expect(reducer.getUser.errors.user).toEqual('user does not exist');
  });

  test('GET_USER_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.GET_USER_END,
      payload: { loading: false }
    });

    expect(reducer.getUser).toHaveProperty('loading');
    expect(reducer.getUser.loading).toBeFalsy();
  });
});
