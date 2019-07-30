import { commentsActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const fetchComments = slug => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/articles/${slug}/comments`,
  onStart: commentsActionsTypes.FETCH_COMMENTS_START,
  onEnd: commentsActionsTypes.FETCH_COMMENTS_END,
  onSuccess: commentsActionsTypes.FETCH_COMMENTS_SUCCESS,
  onFailure: commentsActionsTypes.FETCH_COMMENTS_FAILURE
}));
