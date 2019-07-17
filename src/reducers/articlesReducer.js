import { articlesType } from '../actions-types';
import { articles as initialState } from '../store/initialState';

export default function (state = initialState, { type, payload }) {
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
        articles: [...state.articles, ...payload.articles]
      };
    case articlesType.FETCH_ARTICLES_END:
      return {
        ...state,
        loading: false
      };
    case articlesType.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload.errors },
        loading: false
      };
    case articlesType.FETCH_ARTICLE_START:
      return {
        ...state,
        article: {},
        loading: true
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
        errors: payload,
        article: {},
        loading: false
      };
    case articlesType.FETCH_ARTICLE_END:
      return {
        ...state,
        errors: payload,
        loading: false
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
        article: {},
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
    default:
      return state;
  }
}
