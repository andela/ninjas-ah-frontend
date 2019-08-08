import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/bookmarks';
import { bookmarksActionTypes } from '../../../actions-types';

const bookmarks = [
  {
    article: {
      coverUrl: 'v1563886282/ninjas/vzeo74wgfmx7bmidbwis.png',
      description: 'Hello there',
      id: 7,
      readTime: 0,
      title: 'hELLLLLLO'
    },

    articleSlug: 'hellllllo-1jtjyftiiut',
    createdAt: '2019-07-17T09:48:10.005Z',
    updatedAt: '2019-07-17T09:48:10.005Z',
    userId: 1
  }
];

describe('Bookmarks reducers', () => {
  test('GET_BOOKMARKS_SUCCESS', () => {
    const reducer = reducers.bookmarks(initialState, {
      type: bookmarksActionTypes.GET_BOOKMARKS_SUCCESS,
      payload: { ...bookmarks }
    });

    expect(reducer).toHaveProperty('bookmarks');
  });
  test('GET_BOOKMARKS_FAILURE', () => {
    const reducer = reducers.bookmarks(initialState, {
      type: bookmarksActionTypes.GET_BOOKMARKS_FAILURE,
      payload: { errors: false }
    });
    expect(reducer.getBookmarks).toHaveProperty('errors');
  });
});
