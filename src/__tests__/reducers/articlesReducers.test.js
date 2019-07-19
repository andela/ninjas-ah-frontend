import articlesReducer from '../../reducers/articlesReducer';
import initialState from '../../store/initialStates/articlesInitialState';
import { articlesType } from '../../actions-types';
import articles from '../../__mocks__/articles';
import article from '../../__mocks__/article';
import message from '../../__mocks__/articleMessage';
import errors from '../../__mocks__/errors';

describe('Articles reducers', () => {
  it('FETCH_ARTICLES_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_ARTICLES_START,
      payload: []
    });
    expect(reducer.articles).toBeInstanceOf(Array);
  });
  it('FETCH_ARTICLES_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_ARTICLES_SUCCESS,
      payload: { articles: [...articles] }
    });
    expect(reducer.articles).toBeInstanceOf(Array);
  });
  it('FETCH_ARTICLE_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_ARTICLE_START,
      payload: {}
    });
    expect(reducer.articles).toBeInstanceOf(Array);
  });
  it('FETCH_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_ARTICLE_SUCCESS,
      payload: { article }
    });
    expect(reducer.article).toBeInstanceOf(Object);
  });

  it('FETCH_ARTICLE_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_ARTICLE_START,
      payload: {}
    });
    expect(reducer.article).toBeInstanceOf(Object);
  });

  it('CREATE_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CREATE_ARTICLE_SUCCESS,
      payload: {}
    });
    expect(reducer.article).toBeInstanceOf(Object);
  });
  it('CREATE_ARTICLE_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CREATE_ARTICLE_START,
      payload: {}
    });
    expect(reducer.article).toBeInstanceOf(Object);
  });

  it('FETCH_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_ARTICLE_FAILURE,
      payload: {}
    });
    expect(reducer.article).toBeInstanceOf(Object);
  });

  it('CREATE_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.CREATE_ARTICLE_FAILURE,
      payload: {}
    });
    expect(reducer.errors).toBeInstanceOf(Object);
  });
  it('EDIT_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.EDIT_ARTICLE_SUCCESS,
      payload: {}
    });
    expect(reducer.message).toBeInstanceOf(Object);
  });
  it('EDIT_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.EDIT_ARTICLE_FAILURE,
      payload: {}
    });
    expect(reducer.errors).toBeInstanceOf(Object);
  });
  it('DELETE_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_SUCCESS,
      payload: {}
    });
    expect(reducer.message).toBeInstanceOf(Object);
  });
  it('DELETE_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.DELETE_ARTICLE_FAILURE,
      payload: { errors }
    });
    expect(reducer.errors).toBeInstanceOf(Object);
  });
  it('PUBLISH_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.PUBLISH_ARTICLE_SUCCESS,
      payload: { message }
    });
    expect(reducer.message).toBeInstanceOf(Object);
  });
  it('PUBLISH_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.PUBLISH_ARTICLE_FAILURE,
      payload: { errors }
    });
    expect(reducer.errors).toBeInstanceOf(Object);
  });
  it('UNPUBLISH_ARTICLE_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.UNPUBLISH_ARTICLE_SUCCESS,
      payload: { message }
    });
    expect(reducer.message).toBeInstanceOf(Object);
  });
  it('UNPUBLISH_ARTICLE_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.UNPUBLISH_ARTICLE_FAILURE,
      payload: { errors }
    });
    expect(reducer.errors).toBeInstanceOf(Object);
  });
  it('FETCH_MY_PUBLISHED_ARTICLES_START', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_MY_PUBLISHED_ARTICLES_START,
      payload: []
    });
    expect(reducer.errors).toBeInstanceOf(Object);
  });
  it('FETCH_MY_PUBLISHED_ARTICLES_SUCCESS', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_MY_PUBLISHED_ARTICLES_SUCCESS,
      payload: { articles }
    });
    expect(reducer.articles).toBeInstanceOf(Array);
  });
  it('FETCH_MY_PUBLISHED_ARTICLES_FAILURE', () => {
    const reducer = articlesReducer(initialState, {
      type: articlesType.FETCH_MY_PUBLISHED_ARTICLES_FAILURE,
      payload: { errors }
    });
    expect(reducer.errors).toBeInstanceOf(Object);
  });
  it('DEFAULT', () => {
    articlesReducer(initialState, {
      type: null,
      payload: null
    });
  });
});
