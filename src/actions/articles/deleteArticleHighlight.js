import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (slug, highlightId) => dispatch => dispatch(apiAction({
  method: 'delete',
  url: `/${slug}/highlights/${highlightId}`,
  onStart: articlesType.DELETE_ARTICLE_HIGHLIGHT_START,
  onEnd: articlesType.DELETE_ARTICLE_HIGHLIGHT_END,
  onSuccess: articlesType.DELETE_ARTICLE_HIGHLIGHT_SUCCESS,
  onFailure: articlesType.DELETE_ARTICLE_HIGHLIGHT_FAILURE
}));

export const clearDeleteArticleHighlightStore = payload => dispatch => dispatch({
  type: articlesType.CLEAR_DELETE_ARTICLE_HIGHLIGHT_STORE,
  payload
});
