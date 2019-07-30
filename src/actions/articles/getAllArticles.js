import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getAllArticles = (offset, limit) => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/articles?offset=${offset || 0}&limit=${limit || 10}`,
  onStart: articlesType.FETCH_ARTICLES_START,
  onEnd: articlesType.FETCH_ARTICLES_END,
  onSuccess: articlesType.FETCH_ARTICLES_SUCCESS,
  onFailure: articlesType.FETCH_ARTICLES_FAILURE
}));
