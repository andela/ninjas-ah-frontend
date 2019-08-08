import { likeArticleActionsTypes } from '../actions-types';
import { apiAction } from '../helpers';

export default ({ slug, status }) => dispatch => dispatch(apiAction({
  method: 'post',
  url: `articles/${slug}/${status}`,
  onStart: likeArticleActionsTypes.DISLIKE_ARTICLE_START,
  onEnd: likeArticleActionsTypes.DISLIKE_ARTICLE_END,
  onSuccess: likeArticleActionsTypes.DISLIKE_ARTICLE_SUCCESS,
  onFailure: likeArticleActionsTypes.DISLIKE_ARTICLE_FAILURE
}));
