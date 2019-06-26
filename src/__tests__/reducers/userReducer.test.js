import useReducer from '../../reducers/userReducer';
import initialState from '../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../actions-types';
import user from '../../__mocks__/user';

describe('User reducers', () => {
  test('GET_USER_SUCCESS', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.GET_USER_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toHaveProperty('firstName');
    expect(reducer.profile).toHaveProperty('lastName');
    expect(reducer.profile).toHaveProperty('username');
    expect(reducer.profile).toHaveProperty('email');
  });

  test('GET_USER_FAILURE', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.GET_USER_FAILURE,
      payload: { errors: { user: 'user do not exist' } }
    });

    expect(reducer.getUser.errors).toHaveProperty('user');
  });

  test('SIGNUP_USER_SUCCESS', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toHaveProperty('firstName');
    expect(reducer.profile).toHaveProperty('lastName');
    expect(reducer.profile).toHaveProperty('username');
    expect(reducer.profile).toHaveProperty('email');
  });

  test('SIGNUP_USER_FAILURE', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_FAILURE,
      payload: { errors: { email: 'email already used' } }
    });

    expect(reducer.signup.errors).toHaveProperty('email');
  });

  test('Default', () => {
    const reducer = useReducer(initialState, {
      type: null,
      payload: null
    });
    expect(reducer).not.toHaveProperty('firstName');
    expect(reducer).not.toHaveProperty('lastName');
    expect(reducer).not.toHaveProperty('username');
    expect(reducer).not.toHaveProperty('email');
  });
});
