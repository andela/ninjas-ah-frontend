import articlesReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';
import { newArticleReport } from '../../../__mocks__/article';

describe('Delete report reducers', () => {
  test('CLEAR_DELETE_ARTICLE_REPORT_STORE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CLEAR_DELETE_ARTICLE_REPORT_STORE,
      payload: {}
    });

    expect(reducer.deleteArticleReport).toHaveProperty('loading');
    expect(reducer.deleteArticleReport.loading).toBeFalsy();
    expect(reducer.deleteArticleReport.errors).toEqual({});
    expect(reducer.deleteArticleReport.message).toEqual('');
  });

  test('DELETE_ARTICLE_REPORT_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_REPORT_START,
      payload: { loading: true }
    });

    expect(reducer.deleteArticleReport).toHaveProperty('loading');
    expect(reducer.deleteArticleReport.loading).toBeTruthy();
  });

  test('DELETE_ARTICLE_REPORT_SUCCESS', () => {
    const reducer = articlesReducer(
      {
        ...initialState,
        article: { ...initialState.article, reports: [{ ...newArticleReport, id: 1 }] },
        currentArticlesReports: [{ ...newArticleReport, id: 1 }]
      },
      {
        type: articlesType.DELETE_ARTICLE_REPORT_SUCCESS,
        payload: { reportId: 1 }
      }
    );

    expect(reducer).toHaveProperty('article');
    expect(reducer.article).toHaveProperty('reports');
    expect(reducer.article.reports).toEqual([]);
    expect(reducer.currentArticlesReports).toEqual([]);
  });

  test('DELETE_ARTICLE_REPORT_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_REPORT_FAILURE,
      payload: { message: 'network error' }
    });

    expect(reducer.deleteArticleReport.errors).toHaveProperty('message');
    expect(reducer.deleteArticleReport.errors.message).toEqual('network error');
  });

  test('DELETE_ARTICLE_REPORT_END', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_REPORT_END,
      payload: { loading: false }
    });

    expect(reducer.deleteArticleReport).toHaveProperty('loading');
    expect(reducer.deleteArticleReport.loading).toBeFalsy();
  });
});
