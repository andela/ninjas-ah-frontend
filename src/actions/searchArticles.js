import { searchActionsTypes } from '../actions-types';
import { apiAction } from '../helpers';

export default (url, payload) => dispatch => dispatch(apiAction({
  method: 'get',
  url,
  data: payload,
  onStart: searchActionsTypes.SEARCH_ARTICLE_START,
  onEnd: searchActionsTypes.SEARCH_ARTICLE_END,
  onSuccess: searchActionsTypes.SEARCH_ARTICLE_SUCCESS,
  onFailure: searchActionsTypes.SEARCH_ARTICLE_FAILURE
}));
