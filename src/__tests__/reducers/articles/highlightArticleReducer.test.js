import articlesReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';
import { newHighlight } from '../../../__mocks__/article';

describe('Highlight Article reducers', () => {
  test('CLEAR_HIGHLIGHT_ARTICLE_STORE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CLEAR_HIGHLIGHT_ARTICLE_STORE,
      payload: {}
    });

    expect(reducer.highlight).toHaveProperty('loading');
    expect(reducer.highlight.loading).toBeFalsy();
    expect(reducer.highlight.errors).toEqual({});
    expect(reducer.highlight.message).toEqual('');
  });

  test('HIGHLIGHT_ARTICLE_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.HIGHLIGHT_ARTICLE_START,
      payload: { loading: true }
    });

    expect(reducer.highlight).toHaveProperty('loading');
    expect(reducer.highlight.loading).toBeTruthy();
  });

  test('HIGHLIGHT_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.HIGHLIGHT_ARTICLE_SUCCESS,
      payload: { created: [newHighlight] }
    });

    expect(reducer).toHaveProperty('article');
    expect(reducer.article).toHaveProperty('highlights');
    expect(reducer.article.highlights[0]).toEqual(newHighlight);
  });

  test('HIGHLIGHT_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.HIGHLIGHT_ARTICLE_FAILURE,
      payload: { message: 'article not found' }
    });

    expect(reducer.highlight.errors).toHaveProperty('message');
    expect(reducer.highlight.errors.message).toEqual('article not found');
  });

  test('HIGHLIGHT_ARTICLE_END', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.HIGHLIGHT_ARTICLE_END,
      payload: { loading: false }
    });

    expect(reducer.highlight).toHaveProperty('loading');
    expect(reducer.highlight.loading).toBeFalsy();
  });
});
