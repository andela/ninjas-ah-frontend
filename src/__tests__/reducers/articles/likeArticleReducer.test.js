import articleReducer from '../../../reducers/articlesReducer';
import initialState from '../../../store/initialStates/articlesInitialState';
import { articlesType } from '../../../actions-types';

describe('like article reducers', () => {
  const payload = {
    likes: 2,
    whoLiked: 2,
    dislikes: 1,
    whoDisliked: 2,
    message: 'test payload message',
    createLike: 2
  };

  // get article likes
  it('GET_ARTICLE_LIKES_START', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.GET_ARTICLE_LIKES_START,
      payload: { loading: true }
    });
    expect(reducer.article).toHaveProperty('likes');
  });

  it('GET_ARTICLE_LIKES_SUCCESS', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.GET_ARTICLE_LIKES_SUCCESS,
      payload,
      getLikes: { loading: false, message: 'test message', errors: {} }
    });
    expect(reducer.article).toHaveProperty('likes');
    expect(reducer.article).toHaveProperty('dislikes');
  });

  it('GET_ARTICLE_LIKES_FAILURE', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.GET_ARTICLE_LIKES_FAILURE,
      article: { initialState }
    });

    expect(reducer.article).toHaveProperty('likes');
  });

  it('GET_ARTICLE_LIKES_END', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.GET_ARTICLE_LIKES_END,
      payload: { loading: false }
    });

    expect(reducer.article).toHaveProperty('likes');
    expect(reducer.article).toHaveProperty('dislikes');
  });

  // like article
  it('LIKE_ARTICLE_START', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.LIKE_ARTICLE_START,
      payload: { loading: true }
    });
    expect(reducer.article).toHaveProperty('likes');
  });

  it('LIKE_ARTICLE_SUCCESS', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.LIKE_ARTICLE_SUCCESS,
      payload,
      getLikes: { loading: false, message: 'test message', errors: {} }
    });
    expect(reducer.article).toHaveProperty('likes');
    expect(reducer.article).toHaveProperty('dislikes');
  });

  it('LIKE_ARTICLE_FAILURE', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.LIKE_ARTICLE_FAILURE,
      article: { initialState }
    });

    expect(reducer.article).toHaveProperty('likes');
  });

  it('LIKE_ARTICLE_END', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.LIKE_ARTICLE_END,
      payload: { loading: false }
    });

    expect(reducer.article).toHaveProperty('likes');
    expect(reducer.article).toHaveProperty('dislikes');
  });

  // Dislike article
  it('DISLIKE_ARTICLE_START', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.DISLIKE_ARTICLE_START,
      payload: { loading: true }
    });
    expect(reducer.article).toHaveProperty('likes');
  });

  it('DISLIKE_ARTICLE_SUCCESS', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.DISLIKE_ARTICLE_SUCCESS,
      payload,
      getLikes: { loading: false, message: 'test message', errors: {} }
    });
    expect(reducer.article).toHaveProperty('likes');
    expect(reducer.article).toHaveProperty('dislikes');
  });

  it('DISLIKE_ARTICLE_FAILURE', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.DISLIKE_ARTICLE_FAILURE,
      article: { initialState }
    });

    expect(reducer.article).toHaveProperty('likes');
  });

  it('DISLIKE_ARTICLE_END', () => {
    const reducer = articleReducer(initialState, {
      type: articlesType.DISLIKE_ARTICLE_END,
      payload: { loading: false }
    });

    expect(reducer.article).toHaveProperty('likes');
    expect(reducer.article).toHaveProperty('dislikes');
  });
});
