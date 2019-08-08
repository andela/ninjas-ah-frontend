import reducers from '../../../reducers';
import initialState from '../../../store/initialStates/bookmarks';
import { bookmarksActionTypes } from '../../../actions-types';

const bookmarkList = [
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
describe('Notification reducers', () => {
  test('DELETE_NOTIFICATION_START', () => {
    const reducer = reducers.bookmarks(initialState, {
      type: bookmarksActionTypes.DELETE_BOOKMARK_START,
      payload: { loading: true }
    });
    expect(reducer.deleteNotification).toHaveProperty('loading');
    expect(reducer.deleteNotification.loading).toBeTruthy();
  });

  test('DELETE_BOOKMARK_SUCCESS', () => {
    const initialState = {
      bookmarks: [
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
        },
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
      ]
    };

    const reducer = reducers.bookmarks(initialState, {
      type: bookmarksActionTypes.DELETE_BOOKMARK_SUCCESS,
      payload: initialState.bookmarks.filter(element => element.id !== 1)
    });
    expect(reducer).toBeDefined();
  });

  test('DELETE_BOOKMARK_END', () => {
    const reducer = reducers.bookmarks(initialState, {
      type: bookmarksActionTypes.DELETE_BOOKMARK_END,
      payload: { loading: false }
    });
    expect(reducer.deleteNotification).toHaveProperty('loading');
    expect(reducer.deleteNotification.loading).toBeFalsy();
  });
});
