import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('DELETE_USER_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.DELETE_USER_START,
      payload: { loading: true }
    });

    expect(reducer.deleteUser).toHaveProperty('loading');
    expect(reducer.deleteUser.loading).toBeTruthy();
  });

  test('DELETE_USER_SUCCESS', () => {
    const state = {
      ...initialState,
      listOfUsers: [{ ...user, id: 1 }]
    };

    const reducer = userReducer(state, {
      type: userActionsTypes.DELETE_USER_SUCCESS,
      payload: { userId: 1 }
    });

    expect(reducer.listOfUsers[0]).toHaveProperty('firstName');
    expect(reducer.listOfUsers[0]).toHaveProperty('lastName');
    expect(reducer.listOfUsers[0]).toHaveProperty('username');
    expect(reducer.listOfUsers[0]).toHaveProperty('email');
    expect(reducer.listOfUsers[0].isActive).toBeFalsy();
  });

  test('DELETE_USER_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.DELETE_USER_FAILURE,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.deleteUser.errors).toHaveProperty('user');
    expect(reducer.deleteUser.errors.user).toEqual('user does not exist');
  });

  test('DELETE_USER_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.DELETE_USER_END,
      payload: { loading: false }
    });

    expect(reducer.deleteUser).toHaveProperty('loading');
    expect(reducer.deleteUser.loading).toBeFalsy();
  });
});
