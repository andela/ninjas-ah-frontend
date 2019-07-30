import { likeCommentsActionsTypes } from '../../actions-types';
import { updateCommentLikes } from '../../helpers';

export default (state, { type, payload }) => {
  switch (type) {
    case likeCommentsActionsTypes.LIKE_COMMENT_SUCCESS:
      return {
        ...state,
        commentLikes: state.commentLikes.map(({ commentId, whoLiked, number }) => {
          if (parseInt(commentId, 10) === parseInt(payload.createLike.commentId, 10)) {
            return updateCommentLikes({
              commentId,
              userId: payload.createLike.userId,
              whoLiked,
              currentLikes: number
            });
          }
          return { commentId, whoLiked, number };
        })
      };
    case likeCommentsActionsTypes.LIKE_COMMENT_FAILURE:
      return { ...state };

    default:
      return null;
  }
};
