import { commentsActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const createComment = data => dispatch => dispatch(apiAction({
  data: { body: data.comment },
  method: 'post',
  url: `/articles/${data.slug}/comments`,
  onStart: commentsActionsTypes.CREATE_COMMENT_START,
  onEnd: commentsActionsTypes.CREATE_COMMENT_END,
  onSuccess: commentsActionsTypes.CREATE_COMMENT_SUCCESS,
  onFailure: commentsActionsTypes.CREATE_COMMENT_FAILURE
}));
