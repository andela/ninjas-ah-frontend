import getLikeCommentReducer from '../../../reducers/comments/getLikeComment';
import initialState from '../../../store/initialStates/commentsInitialState';
import { likeCommentsActionsTypes } from '../../../actions-types';

describe('Like Comment', () => {
  const payload = {
    likes: 2,
    whoLiked: { userId: 2 }
  };
  test('LIKE COMMENT SUCCESS', () => {
    getLikeCommentReducer(initialState, {
      type: likeCommentsActionsTypes.GET_COMMENT_LIKES_SUCCESS,
      payload
    });
  });

  test('LIKE COMMENT FAILURE', () => {
    getLikeCommentReducer(initialState, { type: likeCommentsActionsTypes.GET_COMMENT_LIKES_FAILURE });
  });
});
