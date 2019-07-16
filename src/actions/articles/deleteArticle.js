import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const deleteArticle = ({ slug }) => dispatch => dispatch(apiAction({
  method: 'delete',
  url: `/articles/${slug}`,
  onStart: articlesType.DELETE_ARTICLE_START,
  onEnd: articlesType.DELETE_ARTICLE_END,
  onSuccess: articlesType.DELETE_ARTICLE_SUCCESS,
  onFailure: articlesType.DELETE_ARTICLE_FAILURE
}));
