import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (slug, reportId) => dispatch => dispatch(apiAction({
  method: 'delete',
  url: `/article/${slug}/report/${reportId}`,
  onStart: articlesType.DELETE_ARTICLE_REPORT_START,
  onEnd: articlesType.DELETE_ARTICLE_REPORT_END,
  onSuccess: articlesType.DELETE_ARTICLE_REPORT_SUCCESS,
  onFailure: articlesType.DELETE_ARTICLE_REPORT_FAILURE
}));

export const clearDeleteArticleReportStore = payload => dispatch => dispatch({
  type: articlesType.CLEAR_DELETE_ARTICLE_REPORT_STORE,
  payload
});
