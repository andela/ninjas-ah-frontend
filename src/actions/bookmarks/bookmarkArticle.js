import { bookmarksActionTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const bookmarkArticle = ({ slug }) => dispatch => dispatch(apiAction({
  method: 'patch',
  url: `/articles/${slug}/bookmark`,
  onStart: bookmarksActionTypes.BOOKMARK_ARTICLE_START,
  onEnd: bookmarksActionTypes.BOOKMARK_ARTICLE_END,
  onSuccess: bookmarksActionTypes.BOOKMARK_ARTICLE_SUCCESS,
  onFailure: bookmarksActionTypes.BOOKMARK_ARTICLE_FAILURE
}));
