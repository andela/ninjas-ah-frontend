import { articlesType } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (tagList, slug) => dispatch => dispatch(apiAction({
  method: 'put',
  url: `articles/${slug}/tags`,
  data: { tagList },
  onStart: articlesType.CREATE_TAG_START,
  onEnd: articlesType.CREATE_TAG_END,
  onSuccess: articlesType.CREATE_TAG_SUCESS,
  onFailure: articlesType.CREATE_TAG_FAILURE
}));
