import { searchActionsTypes } from '../actions-types';
import { articles as initialState } from '../store/initialState';

/**
 * search reducer
 * @param {object} state
 * @param {object} action { type, payload }
 * @returns {object} state
 */
const searchArticles = (state = initialState, { type, payload }) => {
  switch (type) {
    case searchActionsTypes.SEARCH_ARTICLE_START:
      return { ...state, articles: [] };
    case searchActionsTypes.SEARCH_ARTICLE_SUCCESS:
      return { ...state, articles: [...state.articles, ...payload.articles] };
    case searchActionsTypes.SEARCH_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: payload.message
      };
    default:
      return state;
  }
};

export default searchArticles;
