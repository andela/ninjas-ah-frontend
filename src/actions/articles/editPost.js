import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export const editPost = (data = {}) => dispatch => dispatch(apiAction({
  data: {
    title: data.article.title,
    description: data.article.description,
    body: data.article.body
  },
  httpOptions: { headers: { 'content-type': 'multipart/form-data' } },
  method: 'put',
  url: `/articles/${data.slug}`,
  onStart: articlesType.EDIT_ARTICLE_START,
  onEnd: articlesType.EDIT_ARTICLE_END,
  onSuccess: articlesType.EDIT_ARTICLE_SUCCESS,
  onFailure: articlesType.EDIT_ARTICLE_FAILURE
}));
