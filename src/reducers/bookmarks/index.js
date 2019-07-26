import { bookmarks } from '../../store/initialState';
import getBookmarks from './getBookmarks';
import deleteBookmark from './deleteBookmark';

export default (state = bookmarks, action) => {
  const getAllBookmarks = getBookmarks(state, action);
  const deleteOneBookmark = deleteBookmark(state, action);
  return getAllBookmarks || deleteOneBookmark || state;
};
