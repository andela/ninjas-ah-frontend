import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('ADMIN_GET_USERS_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_USERS_START,
      payload: { loading: true }
    });

    expect(reducer.getUsers).toHaveProperty('loading');
    expect(reducer.getUsers.loading).toBeTruthy();
  });

  test('ADMIN_GET_USERS_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_USERS_SUCCESS,
      payload: { users: [user] }
    });

    expect(reducer.listOfUsers[0]).toEqual(user);
    expect(reducer.listOfUsers[0]).toHaveProperty('firstName');
    expect(reducer.listOfUsers[0]).toHaveProperty('lastName');
    expect(reducer.listOfUsers[0]).toHaveProperty('username');
    expect(reducer.listOfUsers[0]).toHaveProperty('email');
  });

  test('ADMIN_GET_USERS_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_USERS_FAILURE,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.getUsers.errors).toHaveProperty('user');
    expect(reducer.getUsers.errors.user).toEqual('user does not exist');
  });

  test('ADMIN_GET_USERS_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_USERS_END,
      payload: { loading: false }
    });

    expect(reducer.getUsers).toHaveProperty('loading');
    expect(reducer.getUsers.loading).toBeFalsy();
  });
});
