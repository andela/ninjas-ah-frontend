import articlesReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';
import { newHighlight } from '../../../__mocks__/article';

describe('Get highlights reducers', () => {
  test('CLEAR_GET_ARTICLE_HIGHLIGHTS_STORE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CLEAR_GET_ARTICLE_HIGHLIGHTS_STORE,
      payload: {}
    });

    expect(reducer.getHighlights).toHaveProperty('loading');
    expect(reducer.getHighlights.loading).toBeFalsy();
    expect(reducer.getHighlights.errors).toEqual({});
    expect(reducer.getHighlights.message).toEqual('');
  });

  test('GET_ARTICLE_HIGHLIGHTS_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_HIGHLIGHTS_START,
      payload: { loading: true }
    });

    expect(reducer.getHighlights).toHaveProperty('loading');
    expect(reducer.getHighlights.loading).toBeTruthy();
  });

  test('GET_ARTICLE_HIGHLIGHTS_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_HIGHLIGHTS_SUCCESS,
      payload: { highlights: [newHighlight] }
    });

    expect(reducer).toHaveProperty('article');
    expect(reducer.article).toHaveProperty('highlights');
    expect(reducer.article.highlights[0]).toEqual(newHighlight);
  });

  test('GET_ARTICLE_HIGHLIGHTS_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_HIGHLIGHTS_FAILURE,
      payload: { message: 'network error' }
    });

    expect(reducer.getHighlights.errors).toHaveProperty('message');
    expect(reducer.getHighlights.errors.message).toEqual('network error');
  });

  test('GET_ARTICLE_HIGHLIGHTS_END', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.GET_ARTICLE_HIGHLIGHTS_END,
      payload: { loading: false }
    });

    expect(reducer.getHighlights).toHaveProperty('loading');
    expect(reducer.getHighlights.loading).toBeFalsy();
  });
});
