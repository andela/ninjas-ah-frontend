import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';
import { permissionsNormal } from '../../../__mocks__/permissions';

describe('User reducers', () => {
  test('ADMIN_GET_PERMISSIONS_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_PERMISSIONS_START,
      payload: { loading: true }
    });

    expect(reducer.adminGetPermissions).toHaveProperty('loading');
    expect(reducer.adminGetPermissions.loading).toBeTruthy();
  });

  test('ADMIN_GET_PERMISSIONS_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_PERMISSIONS_SUCCESS,
      payload: { permissions: permissionsNormal }
    });

    expect(reducer.adminGetPermissions.permissions).toEqual(permissionsNormal);
  });

  test('ADMIN_GET_PERMISSIONS_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_PERMISSIONS_FAILURE,
      payload: { errors: { message: 'network error' } }
    });

    expect(reducer.adminGetPermissions.errors).toHaveProperty('message');
    expect(reducer.adminGetPermissions.errors.message).toEqual('network error');
  });

  test('ADMIN_GET_PERMISSIONS_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.ADMIN_GET_PERMISSIONS_END,
      payload: { loading: false }
    });

    expect(reducer.adminGetPermissions).toHaveProperty('loading');
    expect(reducer.adminGetPermissions.loading).toBeFalsy();
  });
});
