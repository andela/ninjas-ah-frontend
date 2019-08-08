import articlesReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';
import { newArticleReport } from '../../../__mocks__/article';

describe('Report Article reducers', () => {
  test('CLEAR_REPORT_ARTICLE_STORE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CLEAR_REPORT_ARTICLE_STORE,
      payload: {}
    });

    expect(reducer.reportArticle).toHaveProperty('loading');
    expect(reducer.reportArticle.loading).toBeFalsy();
    expect(reducer.reportArticle.errors).toEqual({});
    expect(reducer.reportArticle.message).toEqual('');
  });

  test('REPORT_ARTICLE_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.REPORT_ARTICLE_START,
      payload: { loading: true }
    });

    expect(reducer.reportArticle).toHaveProperty('loading');
    expect(reducer.reportArticle.loading).toBeTruthy();
  });

  test('REPORT_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.REPORT_ARTICLE_SUCCESS,
      payload: { report: newArticleReport }
    });

    expect(reducer).toHaveProperty('article');
    expect(reducer.article).toHaveProperty('reports');
    expect(reducer.article.reports[0]).toEqual(newArticleReport);
    expect(reducer.currentArticlesReports[0]).toEqual(newArticleReport);
  });

  test('REPORT_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.REPORT_ARTICLE_FAILURE,
      payload: { message: 'article not found' }
    });

    expect(reducer.reportArticle.errors).toHaveProperty('message');
    expect(reducer.reportArticle.errors.message).toEqual('article not found');
  });

  test('REPORT_ARTICLE_END', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.REPORT_ARTICLE_END,
      payload: { loading: false }
    });

    expect(reducer.reportArticle).toHaveProperty('loading');
    expect(reducer.reportArticle.loading).toBeFalsy();
  });
});
