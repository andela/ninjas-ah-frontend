import searchArticlesReducer from '../../reducers/searchArticlesReducer';
import initialState from '../../store/initialStates/articlesInitialState';
import { searchActionsTypes } from '../../actions-types';
import articles from '../../__mocks__/articles';

describe('searchArticles reducers', () => {
  it('SEARCH_ARTICLES_START', () => {
    const reducer = searchArticlesReducer(initialState, {
      type: searchActionsTypes.SEARCH_ARTICLE_START,
      payload: []
    });
    expect(reducer.articles).toBeInstanceOf(Array);
  });
  it('SEARCH_ARTICLES_SUCCESS', () => {
    const reducer = searchArticlesReducer(initialState, {
      type: searchActionsTypes.SEARCH_ARTICLE_SUCCESS,
      payload: { articles: [...articles] }
    });
    expect(reducer.articles).toBeInstanceOf(Array);
  });

  it('SEARCH_ARTICLE_FAILURE', () => {
    const reducer = searchArticlesReducer(initialState, {
      type: searchActionsTypes.SEARCH_ARTICLE_FAILURE,
      payload: { errors: { articles } }
    });
    expect(reducer.article).toBeInstanceOf(Object);
  });
});
