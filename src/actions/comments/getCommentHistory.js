import { commentsActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getCommentHistory
  = (slug, id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/articles/${slug}/comments/${id}/edits`,
    onStart: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_START,
    onEnd: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_END,
    onSuccess: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_SUCCESS,
    onFailure: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_FAILURE
  }));
