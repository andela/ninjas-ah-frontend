import { followActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getFollowing = () => dispatch => dispatch(apiAction({
  method: 'get',
  url: '/users/following',
  onStart: followActionsTypes.GET_FOLLOWING_START,
  onEnd: followActionsTypes.GET_FOLLOWING_END,
  onSuccess: followActionsTypes.GET_FOLLOWING_SUCCESS,
  onFailure: followActionsTypes.GET_FOLLOWING_FAILURE
}));
