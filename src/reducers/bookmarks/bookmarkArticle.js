import { bookmarksActionTypes } from '../../actions-types';
import { bookmarks as initialState } from '../../store/initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case bookmarksActionTypes.BOOKMARK_ARTICLE_START:
      return {
        ...state,
        bookmarks: payload.errors
      };
    case bookmarksActionTypes.BOOKMARK_ARTICLE_SUCCESS:
      return {
        ...state,
        bookmarks: payload.bookmark
      };
    case bookmarksActionTypes.BOOKMARK_ARTICLE_FAILURE:
      return {
        ...state,
        bookmarks: payload.errors.bookmark
      };
    default:
      return null;
  }
};
