import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default slug => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/${slug}/highlights`,
  onStart: articlesType.GET_ARTICLE_HIGHLIGHTS_START,
  onEnd: articlesType.GET_ARTICLE_HIGHLIGHTS_END,
  onSuccess: articlesType.GET_ARTICLE_HIGHLIGHTS_SUCCESS,
  onFailure: articlesType.GET_ARTICLE_HIGHLIGHTS_FAILURE
}));

export const clearGetArticleHighlightsStore = payload => dispatch => dispatch({
  type: articlesType.CLEAR_GET_ARTICLE_HIGHLIGHTS_STORE,
  payload
});
