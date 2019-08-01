import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default slug => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/article/${slug}/report`,
  onStart: articlesType.GET_ARTICLE_REPORTS_START,
  onEnd: articlesType.GET_ARTICLE_REPORTS_END,
  onSuccess: articlesType.GET_ARTICLE_REPORTS_SUCCESS,
  onFailure: articlesType.GET_ARTICLE_REPORTS_FAILURE
}));

export const clearGetOneArticleReportsStore = payload => dispatch => dispatch({
  type: articlesType.CLEAR_GET_ARTICLE_REPORTS_STORE,
  payload
});
