import { bookmarksActionTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const deleteOneBookmark = (articleSlug, userId) => async dispatch => dispatch(apiAction({
  method: 'delete',
  url: `/articles/${articleSlug}/bookmark`,
  data: { articleSlug, userId },
  onStart: bookmarksActionTypes.DELETE_BOOKMARK_START,
  onEnd: bookmarksActionTypes.DELETE_BOOKMARK_END,
  onSuccess: bookmarksActionTypes.DELETE_BOOKMARK_SUCCESS,
  onFailure: bookmarksActionTypes.DELETE_BOOKMARK_FAILURE
}));
