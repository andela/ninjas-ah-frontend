import { likeArticleActionsTypes } from '../actions-types';
import { apiAction } from '../helpers';

export default slug => dispatch => dispatch(apiAction({
  method: 'get',
  url: `articles/${slug}/Likes`,
  onStart: likeArticleActionsTypes.GET_ARTICLE_LIKES_START,
  onEnd: likeArticleActionsTypes.GET_ARTICLE_LIKES_END,
  onSuccess: likeArticleActionsTypes.GET_ARTICLE_LIKES_SUCCESS,
  onFailure: likeArticleActionsTypes.GET_ARTICLE_LIKES_FAILURE
}));
