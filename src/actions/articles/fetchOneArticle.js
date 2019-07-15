import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const fetchOneArticle = (slug, isAuth = false) => dispatch => dispatch(apiAction({
  method: 'get',
  url: isAuth ? `/profile/articles/${slug}` : `/articles/${slug}`,
  onStart: articlesType.FETCH_ARTICLE_START,
  onEnd: articlesType.FETCH_ARTICLE_END,
  onSuccess: articlesType.FETCH_ARTICLE_SUCCESS,
  onFailure: articlesType.FETCH_ARTICLE_FAILURE
}));
