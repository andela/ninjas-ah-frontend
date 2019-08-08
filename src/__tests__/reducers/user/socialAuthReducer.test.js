import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('SOCIAL_AUTH_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SOCIAL_AUTH_START,
      payload: { loading: true }
    });

    expect(reducer.getUser).toHaveProperty('loading');
    expect(reducer.getUser.loading).toBeTruthy();
  });

  test('SOCIAL_AUTH_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SOCIAL_AUTH_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toEqual(user);
    expect(reducer.isAuth).toBeTruthy();
  });

  test('SOCIAL_AUTH_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SOCIAL_AUTH_FAILURE,
      payload: { errors: { user: 'email already exist' } }
    });

    expect(reducer.getUser.errors).toHaveProperty('user');
    expect(reducer.getUser.errors.user).toEqual('email already exist');
  });

  test('SOCIAL_AUTH_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.SOCIAL_AUTH_END,
      payload: { loading: false }
    });

    expect(reducer.getUser).toHaveProperty('loading');
    expect(reducer.getUser.loading).toBeFalsy();
  });
});
