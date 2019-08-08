import { commentsActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const deleteComment = (data = {}) => dispatch => dispatch(apiAction({
  data: { body: data.comment },
  method: 'delete',
  url: `/articles/${data.slug}/comments/${data.id}`,
  onStart: commentsActionsTypes.DELETE_COMMENT_START,
  onEnd: commentsActionsTypes.DELETE_COMMENT_END,
  onSuccess: commentsActionsTypes.DELETE_COMMENT_SUCCESS,
  onFailure: commentsActionsTypes.DELETE_COMMENT_FAILURE
}));
