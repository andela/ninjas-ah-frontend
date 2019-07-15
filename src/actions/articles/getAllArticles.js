import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getAllArticles = () => dispatch => dispatch(apiAction({
  method: 'get',
  url: '/articles',
  onStart: articlesType.FETCH_ARTICLES_START,
  onEnd: articlesType.FETCH_ARTICLES_END,
  onSuccess: articlesType.FETCH_ARTICLES_SUCCESS,
  onFailure: articlesType.FETCH_ARTICLES_FAILURE
}));