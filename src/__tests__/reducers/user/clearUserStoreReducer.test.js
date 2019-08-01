import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';
import { permissionsNormal } from '../../../__mocks__/permissions';

describe('User reducers', () => {
  test('CLEAR_USER_STORE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.CLEAR_USER_STORE,
      payload: {}
    });

    expect(reducer).toEqual(initialState);
  });
});
