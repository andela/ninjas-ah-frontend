import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default data => (dispatch) => {
  const { slug, anchorKey, highlightedText, startIndex, stopIndex, comment } = data;
  return dispatch(apiAction({
    method: 'post',
    url: `/${slug}/highlights`,
    data: { anchorKey, highlightedText, startIndex, stopIndex, comment },
    onStart: articlesType.HIGHLIGHT_ARTICLE_START,
    onEnd: articlesType.HIGHLIGHT_ARTICLE_END,
    onSuccess: articlesType.HIGHLIGHT_ARTICLE_SUCCESS,
    onFailure: articlesType.HIGHLIGHT_ARTICLE_FAILURE
  }));
};

export const clearHighlightArticleStore = payload => dispatch => dispatch({
  type: articlesType.CLEAR_HIGHLIGHT_ARTICLE_STORE,
  payload
});
