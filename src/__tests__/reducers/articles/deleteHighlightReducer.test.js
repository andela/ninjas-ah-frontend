import articlesReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';
import { newHighlight } from '../../../__mocks__/article';

describe('Delete highlight reducers', () => {
  test('CLEAR_DELETE_ARTICLE_HIGHLIGHT_STORE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CLEAR_DELETE_ARTICLE_HIGHLIGHT_STORE,
      payload: {}
    });

    expect(reducer.getHighlights).toHaveProperty('loading');
    expect(reducer.getHighlights.loading).toBeFalsy();
    expect(reducer.getHighlights.errors).toEqual({});
    expect(reducer.getHighlights.message).toEqual('');
  });

  test('DELETE_ARTICLE_HIGHLIGHT_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_HIGHLIGHT_START,
      payload: { loading: true }
    });

    expect(reducer.deleteHighlight).toHaveProperty('loading');
    expect(reducer.deleteHighlight.loading).toBeTruthy();
  });

  test('DELETE_ARTICLE_HIGHLIGHT_SUCCESS', () => {
    const reducer = articlesReducer(
      {
        ...initialState,
        article: { ...initialState.article, highlights: [{ ...newHighlight, id: 1 }] }
      },
      {
        type: articlesType.DELETE_ARTICLE_HIGHLIGHT_SUCCESS,
        payload: { highlightId: 1 }
      }
    );

    expect(reducer).toHaveProperty('article');
    expect(reducer.article).toHaveProperty('highlights');
  });

  test('DELETE_ARTICLE_HIGHLIGHT_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_HIGHLIGHT_FAILURE,
      payload: { message: 'network error' }
    });

    expect(reducer.deleteHighlight.errors).toHaveProperty('message');
    expect(reducer.deleteHighlight.errors.message).toEqual('network error');
  });

  test('DELETE_ARTICLE_HIGHLIGHT_END', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_HIGHLIGHT_END,
      payload: { loading: false }
    });

    expect(reducer.deleteHighlight).toHaveProperty('loading');
    expect(reducer.deleteHighlight.loading).toBeFalsy();
  });
});
