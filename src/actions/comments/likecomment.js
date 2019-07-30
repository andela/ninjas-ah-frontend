import { likeCommentsActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const likeComment = (comment, data) => dispatch => dispatch(apiAction({
  method: 'post',
  url: `/articles/${comment.articleSlug}/comments/${comment.id}/${data}`,
  onStart: likeCommentsActionsTypes.LIKE_COMMENT_START,
  onEnd: likeCommentsActionsTypes.LIKE_COMMENT_END,
  onSuccess: likeCommentsActionsTypes.LIKE_COMMENT_SUCCESS,
  onFailure: likeCommentsActionsTypes.LIKE_COMMENT_FAILURE
}));
