import { bookmarksActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case bookmarksActionTypes.GET_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks: payload.bookmarks
      };
    case bookmarksActionTypes.GET_BOOKMARKS_FAILURE:
      return { ...state };
    default:
      return null;
  }
};
