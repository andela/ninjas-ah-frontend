import mockAxios from 'axios';
import user from '../../__mocks__/user';
import { resolvedRequest, rejectedRequest } from '../../__mocks__/axios';
import store from '../../__mocks__/store';
import apiMiddleware from '../../middlewares/apiMiddleware';
import { signup } from '../../actions/user';
import * as userActionsTypes from '../../actions-types/userActionsTypes';

const dispatch = jest.fn(action => action);
const next = dispatch;

describe('API middleware', () => {
  beforeEach(() => {
    store.clearActions();
    mockAxios.post.mockRestore();
  });

  test('returns errors if the request failed', async () => {
    mockAxios.post.mockResolvedValueOnce(null);
    const action = signup(user)(dispatch);
    await apiMiddleware(store)(next)({});
  });

  test('register a user', async () => {
    const action = signup(user)(dispatch);
    mockAxios.post.mockResolvedValueOnce({ ...resolvedRequest, data: { user } });
    await apiMiddleware(store)(next)(action);

    expect(store.getActions().length).toBeGreaterThan(0);
    expect(store.getActions()[0].type).toEqual(userActionsTypes.SIGNUP_USER_START);
    expect(store.getActions()[1].type).toEqual(userActionsTypes.SIGNUP_USER_SUCCESS);
    expect(store.getActions()[2].type).toEqual(userActionsTypes.SIGNUP_USER_END);
  });

  test('returns errors if the request failed', async () => {
    const action = signup(user)(dispatch);
    mockAxios.post.mockRejectedValueOnce({ response: { data: { errors: { email: 'email already used' } } } });
    await apiMiddleware(store)(next)(action);

    expect(store.getActions().length).toBeGreaterThan(0);
    expect(store.getActions()[0].type).toEqual(userActionsTypes.SIGNUP_USER_START);
    expect(store.getActions()[1].type).toEqual(userActionsTypes.SIGNUP_USER_FAILURE);
    expect(store.getActions()[2].type).toEqual(userActionsTypes.SIGNUP_USER_END);
  });
});
