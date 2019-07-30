import { likeCommentsActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getLikesComment = comment => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/articles/${comment.articleSlug}/comments/${comment.id}/likes`,
  onStart: likeCommentsActionsTypes.GET_COMMENT_LIKES_START,
  onEnd: likeCommentsActionsTypes.GET_COMMENT_LIKES_END,
  onSuccess: likeCommentsActionsTypes.GET_COMMENT_LIKES_SUCCESS,
  onFailure: likeCommentsActionsTypes.GET_COMMENT_LIKES_FAILURE
}));
