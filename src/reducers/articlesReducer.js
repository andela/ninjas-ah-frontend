import { articlesType } from '../actions-types';
import { articles as initialState } from '../store/initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case articlesType.FETCH_ARTICLES_START:
      return {
        ...state,
        articles: [],
        loading: true
      };
    case articlesType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...payload.articles],
        articlesCount: payload.articlesCount,
        loading: false
      };
    case articlesType.FETCH_ARTICLE_START:
      return {
        ...state,
        article: { ...state.article },
      };
    case articlesType.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: { ...state.article, ...payload.article },
        errors: {},
        message: {}
      };
    case articlesType.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        errors: payload,
        article: { ...state.article }
      };
    case articlesType.CREATE_ARTICLE_START:
      return {
        ...state,
        article: {},
        errors: []
      };
    case articlesType.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: { ...state.article, ...payload.article },
        errors: []
      };
    case articlesType.CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        article: { ...state.article },
        errors: { ...state.errors, ...payload }
      };
    case articlesType.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case articlesType.EDIT_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      };
    case articlesType.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case articlesType.DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      };

    case articlesType.PUBLISH_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case articlesType.PUBLISH_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      };
    case articlesType.UNPUBLISH_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case articlesType.UNPUBLISH_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      };
    case articlesType.FETCH_MY_PUBLISHED_ARTICLES_START:
      return {
        ...state,
        articles: []
      };
    case articlesType.FETCH_MY_PUBLISHED_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...payload.articles]
      };
    case articlesType.FETCH_MY_PUBLISHED_ARTICLES_FAILURE:
      return {
        ...state,
        errors: payload,
        article: {}
      };
    // highlight article
    case articlesType.CLEAR_HIGHLIGHT_ARTICLE_STORE:
      return {
        ...state,
        highlight: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.HIGHLIGHT_ARTICLE_START:
      return {
        ...state,
        highlight: { ...state.highlight, message: '', loading: true, errors: {} }
      };
    case articlesType.HIGHLIGHT_ARTICLE_END:
      return {
        ...state,
        highlight: { ...state.highlight, loading: false }
      };
    case articlesType.HIGHLIGHT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          highlights: [...state.article.highlights, payload.created[0]]
        },
        highlight: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.HIGHLIGHT_ARTICLE_FAILURE:
      return {
        ...state,
        highlight: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // get highlights
    case articlesType.CLEAR_GET_ARTICLE_HIGHLIGHTS_STORE:
      return {
        ...state,
        getHighlights: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_START:
      return {
        ...state,
        getHighlights: {
          ...state.getHighlights,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_END:
      return {
        ...state,
        getHighlights: { ...state.getHighlights, loading: false }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_SUCCESS:
      return {
        ...state,
        article: { ...state.article, highlights: payload.highlights },
        getHighlights: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_FAILURE:
      return {
        ...state,
        getHighlights: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // delete highlight
    case articlesType.CLEAR_DELETE_ARTICLE_HIGHLIGHT_STORE:
      return {
        ...state,
        deleteHighlight: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_START:
      return {
        ...state,
        highlight: { ...state.highlight, message: '', errors: {} },
        deleteHighlight: {
          ...state.deleteHighlight,
          loading: true,
          message: '',
          errors: {}
        }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_END:
      return {
        ...state,
        deleteHighlight: { ...state.deleteHighlight, loading: false }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          highlights: [
            ...state.article.highlights.filter(({ id }) => id !== parseInt(payload.highlightId, 10))
          ]
        },
        deleteHighlight: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_FAILURE:
      return {
        ...state,
        deleteHighlight: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    default:
      return state;
  }
};
