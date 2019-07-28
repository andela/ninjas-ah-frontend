import bookmarkArticle from '../../../reducers/bookmarks/bookmarkArticle';
import initialState from '../../../store/initialStates/bookmarks';
import { bookmarksActionTypes } from '../../../actions-types';
import { article } from '../../../__mocks__/article';

describe('bookmark article reducers', () => {
  it('BOOKMARK_ARTICLE_START', () => {
    const reducer = bookmarkArticle(initialState, {
      type: bookmarksActionTypes.BOOKMARK_ARTICLE_START,
      payload: { loading: true }
    });
    expect(reducer).toHaveProperty('bookmarks');
  });
  it('BOOKMARK_ARTICLE_SUCCESS', () => {
    const reducer = bookmarkArticle(initialState, {
      type: bookmarksActionTypes.BOOKMARK_ARTICLE_SUCCESS,
      payload: { bookmarks: article }
    });
    expect(reducer).toHaveProperty('bookmarks');
  });
  it('BOOKMARK_ARTICLE_FAILURE', () => {
    const reducer = bookmarkArticle(initialState, {
      type: bookmarksActionTypes.BOOKMARK_ARTICLE_FAILURE,
      payload: { errors: { bookmark: 'not bookmarked' } }
    });
    expect(reducer).toHaveProperty('bookmarks');
  });
});
