import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const createPost = data => dispatch => dispatch(apiAction({
  data,
  httpOptions: { headers: { 'content-type': 'multipart/form-data' } },
  method: 'post',
  url: '/articles',
  onStart: articlesType.CREATE_ARTICLE_START,
  onEnd: articlesType.CREATE_ARTICLE_END,
  onSuccess: articlesType.CREATE_ARTICLE_SUCCESS,
  onFailure: articlesType.CREATE_ARTICLE_FAILURE
}));
