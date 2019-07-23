import { likeArticleActionsTypes } from '../actions-types';
import { apiAction } from '../helpers';

export default ({ slug, status }) => dispatch => dispatch(apiAction({
  method: 'post',
  url: `articles/${slug}/${status}`,
  onStart: likeArticleActionsTypes.LIKE_ARTICLE_START,
  onEnd: likeArticleActionsTypes.LIKE_ARTICLE_END,
  onSuccess: likeArticleActionsTypes.LIKE_ARTICLE_SUCCESS,
  onFailure: likeArticleActionsTypes.LIKE_ARTICLE_FAILURE
}));
