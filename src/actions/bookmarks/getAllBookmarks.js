import { bookmarksActionTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getAllBookmarks = () => dispatch => dispatch(apiAction({
  method: 'get',
  url: '/articles/bookmarked',
  onStart: bookmarksActionTypes.GET_BOOKMARKS_START,
  onEnd: bookmarksActionTypes.GET_BOOKMARKS_END,
  onSuccess: bookmarksActionTypes.GET_BOOKMARKS_SUCCESS,
  onFailure: bookmarksActionTypes.GET_BOOKMARKS_FAILURE
}));
