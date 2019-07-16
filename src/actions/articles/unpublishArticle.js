import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const unpublishArticle = ({ slug }) => dispatch => dispatch(apiAction({
  method: 'put',
  url: `/articles/${slug}/unpublish`,
  onStart: articlesType.UNPUBLISH_ARTICLE_START,
  onEnd: articlesType.UNPUBLISH_ARTICLE_END,
  onSuccess: articlesType.UNPUBLISH_ARTICLE_SUCCESS,
  onFailure: articlesType.UNPUBLISH_ARTICLE_FAILURE
}));
