import followReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { followActionsTypes } from '../../../actions-types';
import follow from '../../../__mocks__/follow';

const unfollowInitialState = { following: [{ followed: 4 }] };

describe('User reducers', () => {
  test('UNFOLLOW_AUTHOR_START', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.UNFOLLOW_AUTHOR_START,
      payload: { loading: true }
    });
  });
  test('UNFOLLOW_AUTHOR_SUCCESS', () => {
    const reducer = followReducer(unfollowInitialState, {
      type: followActionsTypes.UNFOLLOW_AUTHOR_SUCCESS,
      payload: { followed: 4 }
    });
  });

  test('UNFOLLOW_AUTHOR_FAILURE', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.UNFOLLOW_AUTHOR_FAILURE,
      payload: { errors: 'fail to follow' }
    });
  });
  test('UNFOLLOW_AUTHOR_END', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.UNFOLLOW_AUTHOR_END,
      payload: { loading: false }
    });
  });
});
