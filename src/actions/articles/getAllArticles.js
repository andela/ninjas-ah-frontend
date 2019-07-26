import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getAllArticles = (offset = 0, limit = 10) => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/articles?offset=${offset}&limit=${limit}`,
  onStart: articlesType.FETCH_ARTICLES_START,
  onEnd: articlesType.FETCH_ARTICLES_END,
  onSuccess: articlesType.FETCH_ARTICLES_SUCCESS,
  onFailure: articlesType.FETCH_ARTICLES_FAILURE
}));
