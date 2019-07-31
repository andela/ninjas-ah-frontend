import followReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { followActionsTypes } from '../../../actions-types';
import followers from '../../../__mocks__/followers';

describe('User reducers', () => {
  test('UNFOLLOW_AUTHOR_START', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWERS_START,
      payload: { loading: true }
    });
  });
  test('UNFOLLOW_AUTHOR_SUCCESS', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWERS_SUCCESS,
      ...initialState,
      payload: { followers }
    });
  });
  test('UNFOLLOW_AUTHOR_FAILURE', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWERS_FAILURE,
      payload: { errors: 'fail to get followers' }
    });
  });
  test('UNFOLLOW_AUTHOR_END', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWERS_END,
      payload: { loading: false }
    });
  });
});
