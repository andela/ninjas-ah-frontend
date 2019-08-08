import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
  method: 'get',
  url: '/article/reports',
  onStart: articlesType.GET_ARTICLES_REPORTS_START,
  onEnd: articlesType.GET_ARTICLES_REPORTS_END,
  onSuccess: articlesType.GET_ARTICLES_REPORTS_SUCCESS,
  onFailure: articlesType.GET_ARTICLES_REPORTS_FAILURE
}));

export const clearGetArticlesReportsStore = payload => dispatch => dispatch({
  type: articlesType.CLEAR_GET_ARTICLES_REPORTS_STORE,
  payload
});
