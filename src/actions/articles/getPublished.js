import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getPublished = () => dispatch => dispatch(apiAction({
  method: 'get',
  url: '/articles/published',
  onStart: articlesType.FETCH_MY_PUBLISHED_ARTICLES_START,
  onEnd: articlesType.FETCH_MY_PUBLISHED_ARTICLES_END,
  onSuccess: articlesType.FETCH_MY_PUBLISHED_ARTICLES_SUCCESS,
  onFailure: articlesType.FETCH_MY_PUBLISHED_ARTICLES_FAILURE
}));
