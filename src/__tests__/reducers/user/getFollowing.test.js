import followReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { followActionsTypes } from '../../../actions-types';
import followers from '../../../__mocks__/followers';

describe('User reducers', () => {
  test('UNFOLLOW_AUTHOR_START', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWING_START,
      payload: { loading: true }
    });
  });
  test('UNFOLLOW_AUTHOR_SUCCESS', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWING_SUCCESS,
      ...initialState,
      payload: {
        following: [
          {
            createdAt: '2019-08-05T22:18:11.374Z',
            followed: 1,
            followedUser: {
              id: 1,
              firstName: 'prince',
              lastName: 'sengayire',
              username: 'sengayire',
              email: 'prince123.sengayire@andela.com'
            },
            updatedAt: '2019-08-05T22:18:11.374Z',
            userId: 4
          }
        ]
      }
    });
  });
  test('UNFOLLOW_AUTHOR_FAILURE', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWING_FAILURE,
      payload: { errors: 'fail to get followers' }
    });
  });
  test('UNFOLLOW_AUTHOR_END', () => {
    const reducer = followReducer(initialState, {
      type: followActionsTypes.GET_FOLLOWING_END,
      payload: { loading: false }
    });
  });
});
