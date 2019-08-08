import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('SEARCH_USER_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SEARCH_USER_START,
      payload: { loading: true }
    });

    expect(reducer.searchUser).toHaveProperty('loading');
    expect(reducer.searchUser.loading).toBeTruthy();
  });

  test('SEARCH_USER_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SEARCH_USER_SUCCESS,
      payload: { users: [user] }
    });

    expect(reducer.currentUser).toEqual(user);
    expect(reducer.listOfUsers[0]).toEqual(user);
    expect(reducer.listOfUsers[0]).toHaveProperty('firstName');
    expect(reducer.listOfUsers[0]).toHaveProperty('lastName');
    expect(reducer.listOfUsers[0]).toHaveProperty('username');
    expect(reducer.listOfUsers[0]).toHaveProperty('email');
  });

  test('SEARCH_USER_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SEARCH_USER_FAILURE,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.searchUser.errors).toHaveProperty('user');
    expect(reducer.searchUser.errors.user).toEqual('user does not exist');
  });

  test('SEARCH_USER_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SEARCH_USER_END,
      payload: { loading: false }
    });

    expect(reducer.searchUser).toHaveProperty('loading');
    expect(reducer.searchUser.loading).toBeFalsy();
  });
});
