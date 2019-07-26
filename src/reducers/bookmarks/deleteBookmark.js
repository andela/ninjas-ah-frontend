import { bookmarksActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case bookmarksActionTypes.DELETE_BOOKMARK_START:
      return {
        ...state,
        deleteNotification: {
          ...state.deleteNotification,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case bookmarksActionTypes.DELETE_BOOKMARK_END:
      return {
        ...state,
        deleteNotification: {
          ...state.deleteNotification,
          loading: false
        }
      };
    case bookmarksActionTypes.DELETE_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(val => val.userId === payload.userId
            && val.articleSlug !== payload.slug)
      };

    default:
      return null;
  }
};
