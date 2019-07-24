import { commentsActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const editComment = (comment = {}) => dispatch => dispatch(apiAction({
  data: { body: comment.body },
  method: 'patch',
  url: `/articles/${comment.slug}/comments/${comment.id}`,
  onStart: commentsActionsTypes.EDIT_COMMENT_START,
  onEnd: commentsActionsTypes.EDIT_COMMENT_END,
  onSuccess: commentsActionsTypes.EDIT_COMMENT_SUCCESS,
  onFailure: commentsActionsTypes.EDIT_COMMENT_FAILURE
}));
