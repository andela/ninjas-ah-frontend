import articlesReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';
import { newArticleReport } from '../../../__mocks__/article';

describe('Get reports for one article', () => {
  test('CLEAR_GET_ARTICLE_REPORTS_STORE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CLEAR_GET_ARTICLE_REPORTS_STORE,
      payload: {}
    });

    expect(reducer.getOneArticleReports).toHaveProperty('loading');
    expect(reducer.getOneArticleReports.loading).toBeFalsy();
    expect(reducer.getOneArticleReports.errors).toEqual({});
    expect(reducer.getOneArticleReports.message).toEqual('');
  });

  test('GET_ARTICLE_REPORTS_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_REPORTS_START,
      payload: { loading: true }
    });

    expect(reducer.getOneArticleReports).toHaveProperty('loading');
    expect(reducer.getOneArticleReports.loading).toBeTruthy();
  });

  test('GET_ARTICLE_REPORTS_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_REPORTS_SUCCESS,
      payload: { reports: [newArticleReport] }
    });

    expect(reducer).toHaveProperty('article');
    expect(reducer.article).toHaveProperty('reports');
    expect(reducer.article.reports[0]).toEqual(newArticleReport);
  });

  test('GET_ARTICLE_REPORTS_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_REPORTS_FAILURE,
      payload: { message: 'article not found' }
    });

    expect(reducer.getOneArticleReports.errors).toHaveProperty('message');
    expect(reducer.getOneArticleReports.errors.message).toEqual('article not found');
  });

  test('GET_ARTICLE_REPORTS_END', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_REPORTS_END,
      payload: { loading: false }
    });

    expect(reducer.getOneArticleReports).toHaveProperty('loading');
    expect(reducer.getOneArticleReports.loading).toBeFalsy();
  });
});
