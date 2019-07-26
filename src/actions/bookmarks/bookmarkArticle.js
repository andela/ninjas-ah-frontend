import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const bookmarkArticle = ({ slug }) => dispatch => dispatch(apiAction({
  method: 'patch',
  url: `/articles/${slug}/bookmark`,
  onStart: articlesType.BOOKMARK_ARTICLE_START,
  onEnd: articlesType.BOOKMARK_ARTICLE_END,
  onSuccess: articlesType.BOOKMARK_ARTICLE_SUCCESS,
  onFailure: articlesType.BOOKMARK_ARTICLE_FAILURE
}));
