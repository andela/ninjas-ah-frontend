import followReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { followActionsTypes } from '../../../actions-types';
import follow from '../../../__mocks__/follow';

describe('User reducers', () => {
  test('FOLLOW_AUTHOR_START', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.FOLLOW_AUTHOR_START,
      payload: { loading: true }
    });
  });
  test('FOLLOW_AUTHOR_SUCCESS', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.FOLLOW_AUTHOR_SUCCESS,
      ...initialState,
      payload: { follow }
    });
  });
  test('GET_USER_FAILURE', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.FOLLOW_AUTHOR_FAILURE,
      payload: { errors: 'fail to follow' }
    });
  });
  test('GET_USER_END', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.FOLLOW_AUTHOR_END,
      payload: { loading: false }
    });
  });
});
