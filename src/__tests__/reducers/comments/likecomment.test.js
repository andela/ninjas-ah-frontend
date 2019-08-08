import likeCommentReducer from '../../../reducers/comments/likeComment';
import initialState from '../../../store/initialStates/commentsInitialState';
import { likeCommentsActionsTypes } from '../../../actions-types';
import { updateCommentLikes } from '../../../helpers';

describe('Like Comment', () => {
  const payload = {
    createLike: {
      commentId: 2,
      userId: 1
    }
  };
  const state = { commentLikes: [{ commentId: 2, whoLiked: [1, 2], number: 2 }] };

  test('LIKE COMMENT SUCCESS', () => {
    likeCommentReducer(state, {
      type: likeCommentsActionsTypes.LIKE_COMMENT_SUCCESS,
      payload,
      commentLikes: state.commentLikes.map(({ commentId, whoLiked, number }) => {
        if ((commentId = payload.createLike.commentId)) {
          return updateCommentLikes({
            commentId,
            userId: payload.createLike.userId,
            whoLiked,
            currentLikes: number
          });
        }
      })
    });
  });
  test('LIKE COMMENT SUCCESS', () => {
    payload.createLike.commentId = 3;
    likeCommentReducer(state, {
      type: likeCommentsActionsTypes.LIKE_COMMENT_SUCCESS,
      payload,
      commentLikes: state.commentLikes.map(({ commentId, whoLiked, number }) => {
        if ((commentId = payload.createLike.commentId)) return { commentId, whoLiked, number };
      })
    });
  });

  test('LIKE COMMENT FAILURE', () => {
    likeCommentReducer(initialState, { type: likeCommentsActionsTypes.LIKE_COMMENT_FAILURE });
  });
});
