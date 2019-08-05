import articlesReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';
import { newArticleReport } from '../../../__mocks__/article';

describe('Get all reports', () => {
  test('CLEAR_GET_ARTICLES_REPORTS_STORE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CLEAR_GET_ARTICLES_REPORTS_STORE,
      payload: {}
    });

    expect(reducer.getArticlesReports).toHaveProperty('loading');
    expect(reducer.getArticlesReports.loading).toBeFalsy();
    expect(reducer.getArticlesReports.errors).toEqual({});
    expect(reducer.getArticlesReports.message).toEqual('');
  });

  test('GET_ARTICLES_REPORTS_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLES_REPORTS_START,
      payload: { loading: true }
    });

    expect(reducer.getArticlesReports).toHaveProperty('loading');
    expect(reducer.getArticlesReports.loading).toBeTruthy();
  });

  test('GET_ARTICLES_REPORTS_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLES_REPORTS_SUCCESS,
      payload: { reports: [newArticleReport] }
    });

    expect(reducer.currentArticlesReports[0]).toEqual(newArticleReport);
  });

  test('GET_ARTICLES_REPORTS_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLES_REPORTS_FAILURE,
      payload: { message: 'no network' }
    });

    expect(reducer.getArticlesReports.errors).toHaveProperty('message');
    expect(reducer.getArticlesReports.errors.message).toEqual('no network');
  });

  test('GET_ARTICLES_REPORTS_END', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLES_REPORTS_END,
      payload: { loading: false }
    });

    expect(reducer.getArticlesReports).toHaveProperty('loading');
    expect(reducer.getArticlesReports.loading).toBeFalsy();
  });
});
