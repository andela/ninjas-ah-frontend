import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('EDIT_PROFILE_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.EDIT_PROFILE_START,
      payload: { loading: true }
    });

    expect(reducer.editProfile).toHaveProperty('loading');
    expect(reducer.editProfile.loading).toBeTruthy();
  });

  test('EDIT_PROFILE_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.EDIT_PROFILE_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toHaveProperty('firstName');
    expect(reducer.profile).toHaveProperty('lastName');
    expect(reducer.profile).toHaveProperty('username');
    expect(reducer.profile).toHaveProperty('email');
  });

  test('EDIT_PROFILE_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.EDIT_PROFILE_FAILURE,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.editProfile.errors).toHaveProperty('user');
    expect(reducer.editProfile.errors.user).toEqual('user does not exist');
  });

  test('EDIT_PROFILE_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.EDIT_PROFILE_END,
      payload: { loading: false }
    });

    expect(reducer.editProfile).toHaveProperty('loading');
    expect(reducer.editProfile.loading).toBeFalsy();
  });
});
