import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const publishArticle = ({ slug }) => dispatch => dispatch(apiAction({
  method: 'put',
  url: `/articles/${slug}/publish`,
  onStart: articlesType.PUBLISH_ARTICLE_START,
  onEnd: articlesType.PUBLISH_ARTICLE_END,
  onSuccess: articlesType.PUBLISH_ARTICLE_SUCCESS,
  onFailure: articlesType.PUBLISH_ARTICLE_FAILURE
}));
