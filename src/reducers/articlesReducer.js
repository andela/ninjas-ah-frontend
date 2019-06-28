import { articlesType } from '../actions-types';
import { articles as initialState } from '../store/initialState';

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case articlesType.FETCH_ARTICLES_START:
      return {
        ...state,
        articles: []
      };
    case articlesType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...payload.articles]
      };
    case articlesType.FETCH_ARTICLE_START:
      return {
        ...state,
        article: {}
      };
    case articlesType.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: { ...state.article, ...payload.article }
      };
    case articlesType.FETCH_ARTICLE_FAILURE:
      return {
        errors: payload,
        article: {}
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
    default:
      return state;
  }
}
