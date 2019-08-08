import { likeCommentsActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case likeCommentsActionsTypes.GET_COMMENT_LIKES_SUCCESS:
      return {
        ...state,
        comment: {
          ...state.comment,
          likes: { number: payload.likes, whoLiked: payload.whoLiked.userId }
        },
        commentLikes: [
          ...state.commentLikes,
          { commentId: payload.commentId, number: payload.likes, whoLiked: payload.whoLiked.userId }
        ]
      };
    case likeCommentsActionsTypes.GET_COMMENT_LIKES_FAILURE:
      return {
        ...state,
        comment: { ...state.comment }
      };

    default:
      return null;
  }
};
