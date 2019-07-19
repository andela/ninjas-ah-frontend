import { ratingActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const createRate = (slug, rating) => dispatch => dispatch(apiAction({
  data: { rating },
  method: 'post',
  url: `/rating/${slug}/article`,
  onStart: ratingActionsTypes.CREATE_RATING_START,
  onEnd: ratingActionsTypes.CREATE_RATING_END,
  onSuccess: ratingActionsTypes.CREATE_RATING_SUCCESS,
  onFailure: ratingActionsTypes.CREATE_RATING_FAILURE
}));
