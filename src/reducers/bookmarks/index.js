import { bookmarks } from '../../store/initialState';
import getBookmarks from './getBookmarks';
import deleteBookmark from './deleteBookmark';
import bookmarksArticle from './bookmarkArticle';

export default (state = bookmarks, action) => {
  const getAllBookmarks = getBookmarks(state, action);
  const deleteOneBookmark = deleteBookmark(state, action);
  const bookmark = bookmarksArticle(state, action);
  return getAllBookmarks || deleteOneBookmark || bookmark || state;
};
