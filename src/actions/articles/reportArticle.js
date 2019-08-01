import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (data = {}, slug) => dispatch => dispatch(apiAction({
  method: 'post',
  url: `/article/${slug}/report`,
  data,
  onStart: articlesType.REPORT_ARTICLE_START,
  onEnd: articlesType.REPORT_ARTICLE_END,
  onSuccess: articlesType.REPORT_ARTICLE_SUCCESS,
  onFailure: articlesType.REPORT_ARTICLE_FAILURE
}));

export const clearReportArticleStore = payload => dispatch => dispatch({
  type: articlesType.CLEAR_REPORT_ARTICLE_STORE,
  payload
});
